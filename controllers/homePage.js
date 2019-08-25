const User = require("../database/models/User")
module.exports = async (req,res) => {
    const user =  await User.findOne({_id:req.session.userId});
    console.log(user.username)
    res.render('index',{
        user
    }); 
}