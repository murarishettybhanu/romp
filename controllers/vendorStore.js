const Vendor = require('../database/models/vendor')
const path = require("path")

module.exports = (req, res) => {

  const { vendorDisplayPic,vendorDisplay } = req.files;
  console.log(vendorDisplay.length);
  let arr = [];
  if (vendorDisplayPic) {
    for(i=0;i<vendorDisplay.length;i++){
      vendorDisplay[i].mv(path.resolve(__dirname, '..', 'public/vendorProfile', vendorDisplay[i].name));
      dp = `/vendorProfile/${vendorDisplay[i].name}`;
      arr.push(dp)
    }
    console.log(arr)
    vendorDisplayPic.mv(path.resolve(__dirname, '..', 'public/vendorProfile', vendorDisplayPic.name));
    pp = `/vendorProfile/${vendorDisplayPic.name}`;
  } else {
    pp = `/images/logo.png`;
    dp = ``
  }
  

  Vendor.create({
    ...req.body,
    vendorDisplayPic: pp,
    vendorDisplay: arr
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