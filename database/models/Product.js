const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name: String,
    company_name: String,
    product_pic: String,
    barcode: String,
    subtype: String,
    best_before: String,
    weight: String,
    prize: String
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product