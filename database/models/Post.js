const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  content: String,
  author_id: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
