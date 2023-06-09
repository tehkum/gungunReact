const Product = require('../models/productModel');


// async function getAdminPage(req, res) {
//     try {
//         const product = await Product.create({
//             name: "Gulab Jamun",
//             category: "Sweets",
//             price: 300,
//             description1: "This is Description 1",
//             description2: "This is Description 2",
//             manufactureYear: 2023,
//             edition: 2023,
//             numberOfPages: 99,
//             language: "English"
//         });

//         // console.log(product);
//         // res.send('<h1>getAdminPage Called!</h1>');
//         res.json(product);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// async function getEditProduct(req, res) {
//     try {
//         const sql = 'SELECT * FROM products';
//         const results = await runQuery(sql);

//         res.json(results);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// async function editProduct(req, res) {
//     try {
//         const sql = 'SELECT * FROM products';
//         const results = await runQuery(sql);

//         res.json(results);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// async function deleteProduct(req, res) {
//     try {
//         const sql = 'SELECT * FROM products';
//         const results = await runQuery(sql);

//         res.json(results);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

// async function getAddProduct(req, res) {
//     try {
//         const sql = 'SELECT * FROM products';
//         const results = await runQuery(sql);

//         res.json(results);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

async function addProduct(req, res) {
    try {
        const {name, category, price, description1, description2, manufactureYear, edition, numberOfPages, language} = req.body;
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

        // Product.insertOne(product, (error, result) => {
        //     if (err) {
        //         console.error('Error creating document:', err);
        //         res.status(500).send('Error creating document');
        //         return;
        //       }
          
        //       res.status(201).send('Document created successfully');
        // });

        product.save()
            .then(() => {
                console.log(`Document saved successfully!`);
            })
            .catch((error) => {
                console.log(`Error saving document`, error);
            })

        console.log(product);

        res.send(`<h1>Sucessfully added product</h1>`);

        // console.log(product);
        // res.send('<h1>Product Added successfully</h1>');
        // res.json(product);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// async function getAllOrders(req, res) {
//     try {
//         const sql = 'SELECT * FROM products';
//         const results = await runQuery(sql);

//         res.json(results);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

module.exports =
{
    // getAdminPage: getAdminPage,
    getAllProducts: getAllProducts,
    // getEditProduct: getEditProduct,
    // editProduct: editProduct,
    // deleteProduct: deleteProduct,
    // getAddProduct: getAddProduct,
    addProduct: addProduct,
    // getAllOrders: getAllOrders
}