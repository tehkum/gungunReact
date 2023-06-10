const Product = require('../models/productModel');
const Orders = require('../models/orderModel');


async function getHomePage(req, res) {
    try {
        const products = await Product.find();

        res.json({
            success: true,
            products: products
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