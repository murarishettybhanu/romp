const User = require('../database/models/User')

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      req.flash('EmailAlreadyExist', 'Email already exist please try using other mailid')
      return res.redirect('/')
    }
    req.flash('RegistrationSuccess', 'Registered successfully.Login in continue')
    res.redirect('/')
  })
}