const orders = require('../database/models/Order')
module.exports = async (req,res) =>{
    var bill = await orders.findById(req.params.id,(err)=>{
        if(err) console.log(err)
    })
    res.render("bill",{
        bill
    })
}