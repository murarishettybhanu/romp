const Post = require("../database/models/Post")

module.exports = async (req,res) =>{
    const posts = await Post.find({author_id:req.session.userId}).populate("author");
    res.render('vendor_social',{
        posts
    })
}