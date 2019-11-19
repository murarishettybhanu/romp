const mongoose = require('mongoose')

const CarouselSchema = new mongoose.Schema({
    one:String,
    oneLink:String,
    twoLink:String,
    threeLink:String,
    fourLink:String,
    fiveLink:String,
    sixLink:String,
    two:String,
    three:String,
    four:String,
    five:String,
    six:String,
    id:String
})

const Carousel = mongoose.model('Carousel', CarouselSchema)

module.exports = Carousel
