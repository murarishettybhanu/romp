const Vendor = require('../database/models/vendor')
const path = require("path")

module.exports = (req, res) => {

  const { vendorDisplayPic } = req.files;

  if (vendorDisplayPic) {
    vendorDisplayPic.mv(path.resolve(__dirname, '..', 'public/vendorProfile', vendorDisplayPic.name));
    pp = `/vendorProfile/${vendorDisplayPic.name}`;
  } else {
    pp = `/images/logo.png`;
  }
  

  Vendor.create({
    ...req.body,
    vendorDisplayPic: pp
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