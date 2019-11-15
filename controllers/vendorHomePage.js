const Order = require("../database/models/Order");
const Vendor  = require("../database/models/vendor");

module.exports = async (req,res) =>{
    const vendor = await Vendor.findOne({_id:req.session.userId})
    const orders = await Order.find({vendor_id:req.session.userId}).sort({createdAt:-1});
    res.render("vendorHome",{
        orders,vendor
    })
}