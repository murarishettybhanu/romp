const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  Products: Array,
  user_id: String,
  user_name: String,
  vendor_id:String,
  vendor_name:String,
  totalPrice:String,
  totalQuantity:String,
  mobile : String,
  hno: String,
  area : String,
  city : String,
  pincode : String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  status: {
    type: String,
    default: 'Pending'
  }
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
