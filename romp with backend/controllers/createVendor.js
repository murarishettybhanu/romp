module.exports = (req, res) => {
    res.render('vendor_register', {
      errors: req.flash('registrationErrors'),
      data: req.flash('data')[0]
    })
  }
  