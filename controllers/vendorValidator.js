const vendor = require("../database/models/vendor");
const bcrypt = require('bcryptjs');

module.exports = (req,res)=>{
    const {vendorEmail,password} = req.body;
    vendor.findOne({vendorEmail},(error,vendor)=>{
        if(vendor){
            bcrypt.compare(password,vendor.password,(error,same)=>{
                if(same){
                    req.session.userId = vendor._id;
                    res.redirect('/vendor/homePage');
                }
                else{
                    console.log("Entered password is incorrect");
                    res.redirect('/vendor/login')
                }
            }) 
        }
        else{
            console.log("No user found with that email");
            res.redirect('/vendor/login')
        }
    })
}