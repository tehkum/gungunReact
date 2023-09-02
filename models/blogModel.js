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
    body: [
      {
        content: String,
        type: {
          enum: ["image", "subheading", "paragraph"],
          runValidators: true,
        },
      },
    ],
  },
  { timeframes: true }
);

module.exports = mongoose.model("Blog", blogSchema);
