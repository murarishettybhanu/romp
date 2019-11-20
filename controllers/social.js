const Post = require("../database/models/Post");
const User = require("../database/models/User");

module.exports = async (req,res) => {
    const user = await User.findOne({_id:req.session.userId})
    const posts = await Post.find({}).sort({_id:-1}).populate('author');

    res.render('social',{
        posts,user
    })
}