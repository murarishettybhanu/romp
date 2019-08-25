const User = require("../database/models/User")
const Vendor = require("../database/models/vendor")
const Product = require("../database/models/Product")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    const vendor = await Vendor.findById(req.params.id);
    const vendorProducts = await Product.find({author_id:req.params.id})
    res.render('userVendorProduct',{
        user,vendor,vendorProducts
    }); 
}