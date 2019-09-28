const Order = require("../database/models/Order");
const User  = require("../database/models/User");

module.exports = async (req,res) =>{
    const user = await User.findOne({_id:req.session.userId})
    const orders = await Order.find({user_id:req.session.userId}).sort({_id:-1});
    res.render("usermyorders",{
        orders,user
    })
}