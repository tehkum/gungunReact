const mongoose = require("mongoose");

const youtubeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  link: {
    type: String,
    required: [true, "Please Enter the youtube video link"]
  }
});

module.exports = mongoose.model("Youtube", youtubeSchema);