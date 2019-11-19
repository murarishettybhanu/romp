const Vendor = require("../database/models/vendor")

module.exports = (req, res) => {
    const subcat = req.body;
    Vendor.findOneAndUpdate({ _id: req.session.userId }, { $push: { vendorSubCategory: subcat } }, (err) => {
        if (err) {
            console.log(err)
            res.redirect('/vendor/homePage')

        }
        else {
            res.redirect('/vendor/homePage')

        }
    });
}