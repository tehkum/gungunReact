const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      }, // Title of the blog post
    content: {
        type: String,
        required: true,
      }, // Content of the blog post
    created_at: {
        type: Date,
        required: true,
      },
});

module.exports = mongoose.model("Blog", blogSchema);
