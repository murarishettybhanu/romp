const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema({
    vendorname: {
        type: String,
    },
    vendorlocation: {
        type: String,
    },
    vendorpicture: {
        type: String,
    },
    vendordescription: {
        type: String,
    },
    vendorphone: {
        type: String,
    },
    vendorcategory: {
        type: String,
    },
    vendorstart: {
        type: String,
    }, 
    vendorclose: {
        type: String,
    },
    role:{
        type: String,
    },
    vendoremail: {
        type: String,
        unique: true,
        required: [true, 'Please provide your email.']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.']
    }
})

VendorSchema.pre('save', function (next) {
    const vendor = this

    bcrypt.hash(vendor.password, 10, function (error, encrypted) {
        vendor.password = encrypted
        next()
    })
})

module.exports = mongoose.model('Vendor', VendorSchema)
