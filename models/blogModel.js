const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     // mainImg: String,
//     // subtopic: [
//     //   {
//     //     subheading: String,
//     //     content: String,
//     //     image: [
//     //       {
//     //         type: String,
//     //       },
//     //     ],
//     //   },
//     // ],
//   },
//   { timeframes: true }
// );

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: [{
      type: {
        type: String,
        required: true,
        enum: ['image', 'subHeading', 'paragraph']
      },
      alt: {
        type: String,
        required: function() { return this.type === 'image'; }
      },
      src: {
        type: String,
        required: function() { return this.type === 'image'; }
      },
      content: {
        type: String,
        required: function() { return this.type === 'subHeading' || this.type === 'paragraph'; }
      }
    }],
  },
  { timeframes: true }
);

module.exports = mongoose.model("Blog", blogSchema);
