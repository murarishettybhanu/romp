const Product = require("../database/models/Product")
const Vendor  = require("../database/models/vendor");
module.exports = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    const vendor = await Vendor.findOne({_id:req.session.userId})

    res.render("editproduct",{
        product,vendor
    });
}