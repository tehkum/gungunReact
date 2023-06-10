const Product = require('../models/productModel');
const Youtube = require('../models/youtubeModel');

async function getHomePage(req, res) {
    try {
        const products = await Product.find();
        const youtube = await Youtube.find();
        res.status(200).json({
            success: true,
            products: products,
            youtube: youtube
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = 
{
    getHomePage: getHomePage
}