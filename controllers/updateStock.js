const Product = require("../database/models/Product")

module.exports = (req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{
        number: req.body.number
    },(err,done)=>{
        if(err){
            console.log(err)
            res.redirect('/vendor/products/list')
        }
        else{
            res.redirect('/vendor/products/list')
        }
    })
}