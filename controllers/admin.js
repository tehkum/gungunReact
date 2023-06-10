const Product = require('../models/productModel');
const Orders = require('../models/orderModel');


async function getAdminPage(req, res) {
    try {
        const products = await Product.find();
        const orders = await Orders.find();

        res.json({
            success: true,
            products: products,
            orders: orders
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getEditProduct(req, res) {
    try {
        res.json({
            success: true
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function editProduct(req, res) {
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json({
            success: true,
            updateProduct,
            message: "Product edited successfully"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        Product.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAddProduct(req, res) {
    try {
        res.json({
            success: true,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function addProduct(req, res) {
    try {
        const { name, category, price, description1, description2, manufactureYear, edition, numberOfPages, language } = req.body;
        const product = new Product({
            name: name,
            category: category,
            price: price,
            description1: description1,
            description2: description2,
            manufactureYear: manufactureYear,
            edition: edition,
            numberOfPages: numberOfPages,
            language: language
        });

        Product.insertOne(product)
            .then((result) => {
                console.log(result);
                res.json({
                    success: true
                })
            })
            .catch((error) => {
                console.error('Error inserting user:', error);
            });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await Orders.find();
        res.json(orders);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports =
{
    getAdminPage: getAdminPage,
    getAllProducts: getAllProducts,
    getEditProduct: getEditProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    getAddProduct: getAddProduct,
    addProduct: addProduct,
    getAllOrders: getAllOrders
}