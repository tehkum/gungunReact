const Product = require('../models/productModel');
const Youtube = require('../models/youtubeModel');
const Review = require('../models/reviewModel');

async function getHomePage(req, res) {
    try {
        const products = await Product.find();
        const youtube = await Youtube.find();
        const review = await Review.find();
        res.status(200).json({
            success: true,
            products: products,
            youtube: youtube,
            review: review
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function reviewProduct(req, res) {
    try {
        const { name, comment, productId } = req.body;
        // const { productId } = req.params
        const review = new Review({
          name: name,
          comment: comment,
          productId: productId
        });
    
        Review.create(review)
          .then((createdYoutube) => {
            res.status(200).json({
              success: true,
              message: "review added successfully",
            });
          })
          .catch((error) => {
            console.error("Error creating review:", error);
          });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
}

module.exports = 
{
    getHomePage,
    reviewProduct
}