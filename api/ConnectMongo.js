const mongoose = require('mongoose')

const ConnectMongoDB = (url) =>{
     mongoose.connect(url)
     .then(()=>{
          console.log('DB IS CONNECTED')
     })
     .catch((err)=>{
          console.log(`DB Failed to Connect ${err} `)
     })
}

module.exports = {ConnectMongoDB}