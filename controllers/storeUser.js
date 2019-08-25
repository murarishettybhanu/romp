const User = require('../database/models/User')

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      return res.redirect('/user/register')
    }
    res.redirect('/user/loginpage')
  })
}