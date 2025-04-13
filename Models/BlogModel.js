const mongoose = require('mongoose')


const BlogSchema  = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    coverImage :{
        type: String
    }

})


const BlogModel = mongoose.model('BlogModel' , BlogSchema)

module.exports = BlogModel