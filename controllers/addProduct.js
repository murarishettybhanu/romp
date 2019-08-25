const Vendor = require("../database/models/vendor")


module.exports =  async (req,res)=>{
    const vendor = await Vendor.findOne({_id:req.session.userId});

    res.render('addproduct',{
        vendor
    })
}