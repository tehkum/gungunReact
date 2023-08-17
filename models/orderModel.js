const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productData: [
    {
      productId: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    }
  ],
  fullName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
  },
  pincode: {
    type: String,
    // required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    // required: true,
  }
  // delivered: {
  //   type: String,
    // required: true,
  // },
  // fullName: "",
  //   phoneNo: "",
  //   address1: "",
  //   address2: "",
  //   city: "",
  //   pincode: "",
  //   country: ""
});

module.exports = mongoose.model("Orders", orderSchema);
