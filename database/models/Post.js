const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    content: String,
    author_id: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post