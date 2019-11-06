const Order = require("../database/models/Order");
const Vendor  = require("../database/models/vendor");

module.exports = async (req,res) =>{
    const vendor = await Vendor.findOne({_id:req.session.userId})
    const orders = await Order.find({vendor_id:req.session.userId}&&{status:'Pending'}).sort({createdAt:-1});
    res.render("pendingorders",{
        orders,vendor
    })
}