const express = require('express')
const app = express()
app.use(express.json())
const path = require('path')
app.use(express.urlencoded({extended:false}))
const cookieParser = require('cookie-parser');
const multer = require('multer')
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const dotenv = require('dotenv')
dotenv.config()
const  UserRouter  = require('./Routes/signupRoute')

const { ConnectMongoDB} = require('./ConnectMongo')
const { LoginRoute} = require('./Routes/Login')
const HomeRoute = require('./Routes/HomeRoute')
const {authMiddleware,authMiddlewareForAddBlog} = require('./Middleware/UserAuth')


app.use(express.static('public'));

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))
const PORT = process.env.PORT || 8000
const BlogModel = require('./Models/BlogModel');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // make sure 'uploads' folder exists
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  });
  
  // Create upload middleware
  const upload = multer({ storage: storage });
app.get('/addblog' , (req ,res)=>{
    res.render('add-blogs')

})
app.post('/addblog', upload.single('coverImage'), async (req, res) => {
    const { title, content } = req.body;
    const coverImage = req.file ? req.file.filename : null;

    try {
        const BlogCreated = await BlogModel.create({
            title,
            content,
            coverImage, // Make sure your BlogModel supports this field
        });

        res.redirect('/show/blogs');
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/blog/:id', async (req, res) => {
    try {
      const blog = await BlogModel.findById(req.params.id);
      if (!blog) {
        return res.status(404).send('Blog not found');
      }
      res.render('blog-detail', { blog });
    } catch (err) {
      console.error('Error fetching blog:', err);
      res.status(500).send('Error loading blog');
    }
  });
  


app.get('/show/blogs', async (req, res) => {
    try {
      const blogs = await BlogModel.find() // Get blogs in descending order by creation date
      res.render('showBlogs', { blogs });  // Render the 'blogs.ejs' page with the blogs data
    } catch (err) {
      console.error('Error fetching blogs:', err);
      res.status(500).send('Error loading blogs');
    }
  });
  

// Storage config: where to save uploaded files




app.use('/user' , UserRouter )





app.use('/home' , authMiddleware, HomeRoute )


app.get('/' , (req ,res)=>{
    res.render('FrontendPage')
})

ConnectMongoDB(process.env.MONGODBURL)
app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))