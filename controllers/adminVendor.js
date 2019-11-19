const Vendor = require("../database/models/vendor");
module.exports = async (req,res) => {
    const vendors = await Vendor.find({});
    res.render('adminVendor',{
        vendors
    }); 
}