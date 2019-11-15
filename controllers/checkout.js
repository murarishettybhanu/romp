const Order = require('../database/models/Order');
const User = require("../database/models/User");
const Vendor = require("../database/models/vendor");
const Product = require("../database/models/Product");

module.exports = async (req, res) => {
    const user = await User.findOne({ _id: req.session.userId });
    const vendor = await Vendor.findOne({ _id: req.params.id });
    let a = req.body;
    const arr = [];
    for (i = 0; i < a.length - 1; i++) {
        arr.push(a[i]);
        const product = await Product.find({ author_id: req.params.id } && { product_name: a[i].name });
        var n = product[0].number - a[i].quantity;
        Product.findOneAndUpdate({ author_id: req.params.id } && { product_name: a[i].name }, {
            number: n
        }, (err, done) => {
            if (err) {
                console.log(err);
            }
        })
    }
    const totalPrice = a[a.length - 1].totalPrice;
    const totalQuantity = a[a.length - 1].totalQuantity;
    var uniqueId = "ORD" + Math.floor(Math.random() * (9999 - 1000) + 1000);

    Order.create({
        Products: arr,
        user_id: req.session.userId,
        user_name: user.username,
        vendor_name: vendor.vendorName,
        vendor_id: req.params.id,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        mobile: user.mobile,
        hno: user.hno,
        area: user.area,
        city: user.city,
        ordertype: req.body.ordertype,
        pincode: user.pincode,
        uniqueId: uniqueId
    }, (error, order) => {
        if (error) {
            console.log(error);
        }
    })

}