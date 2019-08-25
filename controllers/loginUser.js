const User = require("../database/models/User");
const bcrypt = require('bcryptjs');

module.exports = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email},(error,user)=>{
        if(user){
            bcrypt.compare(password,user.password,(error,same)=>{
                if(same){
                    req.session.userId = user._id;
                    res.redirect('/');
                }
                else{
                    console.log("Entered password is incorrect");
                    res.redirect('/user/loginpage')
                }
            }) 
        }
        else{
            console.log("No user found with that email");
            res.redirect('/user/loginpage')
        }
    })
}