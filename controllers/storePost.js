const path = require('path')
const Post = require('../database/models/Post')

module.exports = (req, res) => {
  const { image } = req.files

  image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
    Post.create({
      ...req.body,
      image: `/posts/${image.name}`,
      author_id: req.session.userId,
      author: req.session.userId
    }, (error, post) => {
<<<<<<< HEAD
      if(post){
        res.redirect("createPost");
      }
      else{
        res.redirect("createPost");
=======
      if(error){
        res.redirect("/vendor/homepage");
        console.log(error)
      }
      else{
        res.redirect("/createPost");
>>>>>>> 482d20f43a5b0efdc938f025a29fcced83081b18
      }
    });
  })
}