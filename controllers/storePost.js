const path = require('path')
const Post = require('../database/models/Post')

module.exports = (req, res) => {
  const { image } = req.files

  image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
    Post.create({
      ...req.body,
      image: `/posts/${image.name}`,
      author_id: req.session.userId
    }, (error, post) => {
      if(post){
        res.redirect("createPost");
      }
      else{
        res.redirect("createPost");
      }
    });
  })
}