const Post = require("../database/models/Post");
const Vendor = require("../database/models/vendor");


module.exports = async (req,res) =>{
    const posts = await Post.find({author_id:req.session.userId}).populate("author");
    const vendor = await Vendor.findOne({_id:req.session.userId})
    res.render('vendor_social',{
        posts,vendor
    })
}