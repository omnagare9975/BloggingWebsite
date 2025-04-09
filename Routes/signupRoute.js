const express = require('express')

const UserRouter = express.Router()
const UserSignup = require('../Controllers/SignUpController')
const LoginFindUser = require('../Controllers/LoginController')

UserRouter.post('/signup' ,  UserSignup)

UserRouter.get('/signup' , (req , res)=>{
    res.render('siginup')
})


UserRouter.post('/login' , LoginFindUser)
UserRouter.get('/login' , (req ,res)=>{
    res.render('Login')
})

module.exports = UserRouter
