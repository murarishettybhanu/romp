const Vendor = require("../database/models/vendor");
module.exports = async (req,res) => {
    
    if(req.params.var == "vendorBlock") var status = "Blocked";
    else{
        var  status = "unBlocked"
    }
     await Vendor.findByIdAndUpdate(req.params.id,{
        status : status
    });
    res.redirect('/admin/vendors'); 
}