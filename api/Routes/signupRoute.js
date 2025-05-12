const express = require('express')

const UserRouter = express.Router()
const UserSignup = require('../Controllers/SignUpController')
const LoginFindUser = require('../Controllers/LoginController')
const StoreBlogInfo = require('../Controllers/addBlogContoller')

UserRouter.post('/signup' ,  UserSignup)

// UserRouter.get('/signup' , (req , res)=>{
//     res.render('siginup')
// })


UserRouter.post('/login' , LoginFindUser)
// UserRouter.get('/login' , (req ,res)=>{
//     res.render('Login')
// })

// UserRouter.get('/addblog' , (req , res)=>{
//     res.render('add-blogs')
// })

// UserRouter.post('/addblog'  , StoreBlogInfo ) 


module.exports = UserRouter
