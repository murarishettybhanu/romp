const Product = require("../database/models/Product")

module.exports = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.render("editproduct",{
        product
    });
}