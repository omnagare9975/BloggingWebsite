const mongoose = require('mongoose')

const ConnectMongoDB = (url) =>{
     mongoose.connect(url)
     .then(()=> console.log(`MongoDB is Connected`))
     .catch((error)=> console.log(`DB is Failed To Connect because ${error}`) )
}

module.exports = {ConnectMongoDB}