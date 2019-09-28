const User = require("../database/models/User")
const Vendor = require("../database/models/vendor")
const Posts = require("../database/models/Post")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    const vendor = await Vendor.findById(req.params.id);
    const posts = await Posts.find({author:req.params.id}).populate('author');
    res.render('userVendorProfile',{
        user,vendor,posts
    }); 
}