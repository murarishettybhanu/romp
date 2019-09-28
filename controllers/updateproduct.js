const Product = require('../database/models/Product')

module.exports = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, {
        product_name: req.body.product_name,
        company_name: req.body.company_name,
        barcode: req.body.barcode,
        costprice: req.body.costprice,
        discount: req.body.discount,
        margin: req.body.margin,
        sellingprice: req.body.sellingprice,
        mrp: req.body.mrp,
        sgst: req.body.sgst,
        cgst: req.body.cgst,
        best_before: req.body.best_before
    }, (err, done) => {
        if (err) {
            console.log(err);
            res.redirect('/vendor/products/list')
        }
        else {
            res.redirect('/vendor/products/list')
        }
    })
}