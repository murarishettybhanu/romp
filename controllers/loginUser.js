const User = require("../database/models/User");
const bcrypt = require('bcryptjs');

module.exports = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.flash('loginSucces', 'You Are Logged In')
                    req.session.userId = user._id;
                    res.redirect('/');
                }
                else {
                    req.flash('IncorrectPwd', 'You Have Entered an Incorrect Password')
                    res.redirect('/')
                }
            })
        }
        else {
            req.flash('IncorrectEmail', 'You Have Entered an Incorrect Email')
            res.redirect('/')
        }
    })
}