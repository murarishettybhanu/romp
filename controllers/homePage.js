const User = require("../database/models/User")
const coursal = require("../database/models/carousel")
const Vendor = require("../database/models/vendor")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    const vendors = await Vendor.find({} && {status:'unBlocked'});
    const Coursal = await coursal.findOne({id:"Iexists"});
    res.render('index',{
        user,vendors,Coursal
    }); 
}