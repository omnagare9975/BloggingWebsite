const express = require('express')
const LoginRoute = express.Router()
const LoginFindUser = require('../Controllers/LoginController')
LoginRoute.post('login' , LoginFindUser)
// LoginRoute.get('login' , (req ,res)=>{
//     res.render('Login')
// })


module.exports = LoginRoute