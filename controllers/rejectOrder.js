const Order = require("../database/models/Order");
const Product = require("../database/models/Product");

module.exports = async (req, res) => {
    const order = await Order.findById(req.params.id);
    console.log(order.Products.length);
    for (i = 0; i <= order.Products.length - 1; i++) {
        const product = await Product.find({ author_id: order.vendor_id } && { product_name: order.Products[i].name });
        var n = parseInt(product[0].number) + parseInt(order.Products[i].quantity);
        console.log(n);
        Product.findOneAndUpdate({ author_id: order.vendor_id } && { product_name: order.Products[i].name }, {
            number: n
        },(err,done)=>{
            if(err){
                console.log(err);
            }
        })
    }
    Order.findOneAndUpdate({ _id: req.params.id }, {
        status: 'Rejected'
    }, (err, done) => {
        if (err) {
            console.log(err);
            res.redirect('/vendor/homePage');
        }
        else {
            res.redirect('/vendor/homePage');
        }
    })
}