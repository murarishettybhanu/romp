const vendor = require("../database/models/vendor");
const bcrypt = require('bcryptjs');

module.exports = (req,res)=>{
    const {vendorBusinessEmail,password} = req.body;
    vendor.findOne({vendorBusinessEmail},(error,vendor)=>{
        if(vendor){
            bcrypt.compare(password,vendor.password,(error,same)=>{
                if(same){
                    req.session.userId = vendor._id;
                    res.redirect('/vendor/homePage');
                }
                else{
                    console.log("Entered password is incorrect");
                    req.flash('IncorrectPwd', 'You Have Entered an Incorrect Password')
                    res.redirect('/')
                }
            }) 
        }
        else{
            console.log("No user found with that email");
            req.flash('IncorrectEmail', 'You Have Entered an Incorrect Email')
            res.redirect('/')
        }
    })
}