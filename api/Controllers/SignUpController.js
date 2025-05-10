const mongoose = require('mongoose')
const  { UserModel} = require('../Models/User')
const bcrypt  = require('bcrypt')
const UserSignup = async (req , res) =>{
    const {name , email , password}  =  req.body


    const emailAlready = await UserModel.findOne({email})

    if (emailAlready){
        return res.render('ShowMessage' , {message: 'Email Already exist...Try new'})

    }

    const GenSalt = bcrypt.genSaltSync(10)
    const hashedPass = bcrypt.hashSync(password , GenSalt)

    const CreateUser = await UserModel.create({
        name,
        email,
        password : hashedPass
    })
    
    try {
           res.status(201).json({ message: 'Signup successful!' });
    }
    catch (error) {
        return res.send(`Internal Server Error ${error} `)
    }
}


module.exports = UserSignup