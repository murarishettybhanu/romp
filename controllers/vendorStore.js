const Vendor = require('../database/models/vendor')
const path = require("path")

module.exports = (req, res) => {

  const { vendorDisplayPic,vendorDisplay } = req.files;

  if (vendorDisplayPic) {
    vendorDisplayPic.mv(path.resolve(__dirname, '..', 'public/vendorProfile', vendorDisplayPic.name));
    pp = `/vendorProfile/${vendorDisplayPic.name}`;
    vendorDisplay.mv(path.resolve(__dirname, '..', 'public/vendorProfile', vendorDisplay.name));
    dp = `/vendorProfile/${vendorDisplay.name}`;
  } else {
    pp = `/images/logo.png`;
    dp = ``
  }
  

  Vendor.create({
    ...req.body,
    vendorDisplayPic: pp,
    vendorDisplay: dp
  }, (error, post) => {
    if (error) {
      res.redirect("/vendorRegister");
      console.log(error)
    }
    else {
        res.redirect("/")
    }
  });

};