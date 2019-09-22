const Order = require('../database/models/Order');
const User = require("../database/models/User");
const Vendor = require("../database/models/vendor");

module.exports = async(req,res)=>{
    const user = await User.findOne({_id:req.session.userId});
    const vendor = await Vendor.findOne({_id:req.params.id});
    let a =  req.body;
    const arr = [];
    for(i=0;i<a.length-1;i++){
        arr.push(a[i]);
    }
    const totalPrice=a[a.length-1].totalPrice;
    const totalQuantity=a[a.length-1].totalQuantity;

    Order.create({
        Products: arr,
        user_id: req.session.userId,
        user_name: user.username,
        vendor_name: vendor.vendorName,
        vendor_id: req.params.id,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity
    },(error,order)=>{
        if(error){
            console.log(error);
        }
    })

}