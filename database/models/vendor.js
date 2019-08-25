const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String
  },
  vendorEmail: {
    type: String,
    unique: true,
    required: true
  },
  vendorDescription:{
    type: String
  },

  vendorDisplayPic :{
    type: String
  },
  vendorLocation : {
      type: String
  },
  vendorPhoneNo :{
      type: String
  },
  vendorCategory:{
      type: String
  },
  storeOpenTime:{
      type: Array
  },
  storeCloseTime :{
      type: Array
  },
  password:{
      type:String
  }
  
})

vendorSchema.pre('save', function(next) {
  const vendor = this

  bcrypt.hash(vendor.password, 10, function (error, encrypted) {
    vendor.password = encrypted
    next()
  })
})

module.exports = mongoose.model('Vendor', vendorSchema)