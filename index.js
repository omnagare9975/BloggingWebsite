const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());


const dotenv = require('dotenv')
dotenv.config()
const  UserRouter  = require('./Routes/signupRoute')
const path = require('path')
const { ConnectMongoDB} = require('./ConnectMongo')
const { LoginRoute} = require('./Routes/Login')
const HomeRoute = require('./Routes/HomeRoute')
const {authMiddleware} = require('./Middleware/UserAuth')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))
const PORT = process.env.PORT || 8000


app.use('/user' , UserRouter )


app.use('/home' , authMiddleware, HomeRoute )
app.get('/' , (req ,res)=>{
    res.json({message: 'Message from frontpage'})
})

ConnectMongoDB(process.env.MONGODBURL)
app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))