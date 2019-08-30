const product = require("../database/models/Product")

module.exports = async (req,res) =>{
    product.findOneAndRemove({_id:req.params.id},(succ,err)=>{
        if(succ){
            res.redirect('/vendor/products/list');
        }
        else{
            res.redirect('/vendor/products/list');
        }
    })

}