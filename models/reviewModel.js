const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    trim: true,
  },
  comment: {
    type: String,
    required: [true, "Please Enter Message"],
  },
  productId: {
    type: String,
    required: [true]
  }
});

module.exports = mongoose.model("Review", reviewSchema);