const Vendor = require("../database/models/vendor");
const Product = require("../database/models/Product");

module.exports = async (req,res)=>{
    const products = await Product.find({author_id:req.session.userId})
    res.render('productsList',{
        products
    })
}