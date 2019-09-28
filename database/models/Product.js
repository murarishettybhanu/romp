const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: String,
    company_name: String,
    product_pic: String,
    product_type: String,
    costprice: String,
    discount: String,
    margin: String,
    sellingprice: String,
    mrp: String,
    sgst: String,
    cgst: String,
    number: String,
    units: String,
    barcode: String,
    best_before: String,
    author_id:String
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product