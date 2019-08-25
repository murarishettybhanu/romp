const Product = require('../database/models/Product')
const path = require("path")

module.exports = (req, res) => {

  const { product_pic } = req.files;

  if (product_pic) {
    product_pic.mv(path.resolve(__dirname, '..', 'public/products', product_pic.name));
    pp = `/products/${product_pic.name}`;
  } else {
    pp = `/images/logo.png`;
  }
  

  Product.create({
    ...req.body,
    product_pic: pp,
    author_id: req.session.userId
  }, (error, post) => {
    if (error) {
      res.redirect("/product/add");
      console.log(error)
    }
    else {
        res.redirect("/vendor/products/list")
    }
  });

};