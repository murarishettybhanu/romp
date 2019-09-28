const Order = require("../database/models/Order")

module.exports = (req,res)=>{
    Order.findOneAndUpdate({_id:req.params.id},{
        status: 'Cancelled'
    },(err,done)=>{
        if(err){
            console.log(err);
            res.redirect('/myorders');
        }
        else{
            res.redirect('/myorders');
        }
    })
}