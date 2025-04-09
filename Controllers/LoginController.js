const mongoose = require('mongoose')
const  { UserModel} = require('../Models/User')
const bcrypt  = require('bcrypt')


const LoginFindUser = async (req ,res) =>{
    const {email , password} = req.body
    
    const Finduser = await UserModel.findOne({email})

    const UserPss = bcrypt.compareSync(password , Finduser.password)

    if (UserPss){
        res.send('Login Successful!!')
    }else{
        res.send('Wrong passowrd')
    }
}


module.exports = LoginFindUser