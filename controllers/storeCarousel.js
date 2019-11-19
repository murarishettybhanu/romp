const Carousel = require('../database/models/carousel');
const path = require('path')


module.exports = (req, res) => {
    const { one, two, three, four, five, six } = req.files
    if (one) {
        Carousel.countDocuments({}, (err, count) => {
            if (count > 0) {
                one.mv(path.resolve(__dirname, '..', 'public/Carosal', one.name), (error) => {
                    if (error) console.log(error);
                    else {
                        Carousel.findOneAndUpdate({ id: "Iexists" }, {
                            one: `/Carosal/${one.name}`,
                            oneLink : req.body.oneLink
                        }, (err, done) => {
                            if (err) {

                                console.log(err);
                            }
                            else {
                                req.flash("Success", "Uploaded Successfully")
                                console.log('success')
                                res.redirect('/admin/carousel');
                            }
                        })
                    }
                })
            }
            if (count === 0) {
                console.log("hii")
                one.mv(path.resolve(__dirname, '..', 'public/Carosal', one.name), (error) => {
                    if (error) console.log(error)
                    else {
                        Carousel.create({
                            one: `/Carosal/${one.name}`,
                            oneLink : req.body.oneLink,
                            id: "Iexists"
                        })
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        });
    }
    if (two) {
        console.log(two);
        two.mv(path.resolve(__dirname, '..', 'public/Carosal', two.name), (error) => {
            if (error) console.log(error);
            else {
                Carousel.findOneAndUpdate({ id: "Iexists" }, {
                    two: `/Carosal/${two.name}`,
                    twoLink : req.body.twoLink

                }, (err, done) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        })
    }
    if (three) {
        console.log(three);
        three.mv(path.resolve(__dirname, '..', 'public/Carosal', three.name), (error) => {
            if (error) console.log(error);
            else {
                Carousel.findOneAndUpdate({ id: "Iexists" }, {
                    three: `/Carosal/${three.name}`,
                    threeLink : req.body.threeLink

                }, (err, done) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        })
        
    }
    if (four) {
        console.log(four);
        four.mv(path.resolve(__dirname, '..', 'public/Carosal', four.name), (error) => {
            if (error) console.log(error);
            else {
                Carousel.findOneAndUpdate({ id: "Iexists" }, {
                    four: `/Carosal/${four.name}`,
                    fourLink : req.body.fourLink

                }, (err, done) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        })
    }
    if (five) {
        console.log(five);
        five.mv(path.resolve(__dirname, '..', 'public/Carosal', five.name), (error) => {
            if (error) console.log(error);
            else {
                Carousel.findOneAndUpdate({ id: "Iexists" }, {
                    five: `/Carosal/${five.name}`,
                    fiveLink : req.body.fiveLink


                }, (err, done) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        })
    }
    if (six) {
        console.log(six);
        six.mv(path.resolve(__dirname, '..', 'public/Carosal', six.name), (error) => {
            if (error) console.log(error);
            else {
                Carousel.findOneAndUpdate({ id: "Iexists" }, {
                    six: `/Carosal/${six.name}`,
                    sixLink : req.body.sixLink


                }, (err, done) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        req.flash("Success", "Uploaded Successfully")
                        console.log('success')
                        res.redirect('/admin/carousel');
                    }
                })
            }
        })
    }
}