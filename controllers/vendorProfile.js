const User = require("../database/models/User")
const Vendor = require("../database/models/vendor")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    const vendor = await Vendor.findById(req.params.id);
    res.render('userVendorProfile',{
        user,vendor
    }); 
}