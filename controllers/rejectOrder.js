const Order = require("../database/models/Order")

module.exports = (req,res)=>{
    Order.findOneAndUpdate({_id:req.params.id},{
        status: 'Rejected'
    },(err,done)=>{
        if(err){
            console.log(err);
            res.redirect('/orders');
        }
        else{
            res.redirect('/orders');
        }
    })
}