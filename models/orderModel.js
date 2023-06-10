const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: {
    type: Number,
    required: true
  },
  
});

module.exports = mongoose.model("Orders", orderSchema);