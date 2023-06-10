const express = require('express');
const router = express.Router();


const {getAdminPage, getAllProducts, getEditProduct, editProduct, deleteProduct,getAddProduct,addProduct,getAllOrders} = require('../controllers/admin');


router.route('/')
    .get(getAdminPage);

router.route('/products')
    .get(getAllProducts);

router.route('/products/:id/edit')
    .get(getEditProduct)
    .post(editProduct);

router.route('/products/:id/delete')
    .post(deleteProduct);

router.route('/products/add')
    .get(getAddProduct)
    .post(addProduct);

router.route('/orders')
    .get(getAllOrders);

module.exports = router;