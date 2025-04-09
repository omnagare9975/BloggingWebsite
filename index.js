const express = require('express')
const app = express()
const PORT = 8080
const  UserRouter  = require('./Routes/signupRoute')
const path = require('path')
const { ConnectMongoDB} = require('./ConnectMongo')
const { LoginRoute} = require('./Routes/Login')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))


app.use('/user' , UserRouter )



app.get('/' , (req ,res)=>{
    res.json({message: 'Message from frontpage'})
})

ConnectMongoDB('mongodb://localhost:27017/blog')
app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))