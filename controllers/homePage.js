const User = require("../database/models/User")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    res.render('index',{
        user
    }); 
}