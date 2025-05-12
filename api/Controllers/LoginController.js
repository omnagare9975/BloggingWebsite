const mongoose = require('mongoose')
const  { UserModel} = require('../Models/User')
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcrypt')


const LoginFindUser = async (req ,res) =>{
    const {email , password} = req.body
    
    const Finduser = await UserModel.findOne({email})

    const UserPss = bcrypt.compareSync(password , Finduser.password)
    const  UserObject = {
        name : Finduser.name ,
        email : Finduser.email
    }
    

    
    const token = jwt.sign(UserObject , process.env.JWT_SECRET )


    if (UserPss){
        // res.cookie('token' , Token)
       return res.json({message: 'Login Successful' , token})
       
    }else{
        // res.render('LoginFailed' , {message: `Wrong Password Pls Try Again`})
    }
}


module.exports = LoginFindUser