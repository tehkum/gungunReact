const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  couponCode: {
    type: String,
    // required: [true, "Please Enter Coupon Code"],
    // trim: true,
  },
  discount: {
    type: String,
    required: [true, "Please Enter Message"],
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
