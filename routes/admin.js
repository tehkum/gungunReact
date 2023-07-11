const express = require('express');
const router = express.Router();


const {getAdminPage, getAllProducts, getEditProduct, editProduct, deleteProduct,getAddProduct,addProduct,getAllOrders, getAddYoutube, addYoutube, deleteYoutube, deleteReview} = require('../controllers/admin');


router.route('/')
    .get(getAdminPage);

router.route('/products')
    .get(getAllProducts);

router.route('/products/:id/edit')
    .get(getEditProduct)
    .put(editProduct);

router.route('/products/:id/delete')
    .delete(deleteProduct);

router.route('/products/add')
    .get(getAddProduct)
    .post(addProduct);

router.route('/youtube/add')
    .get(getAddYoutube)
    .post(addYoutube);

router.route('/youtube/:id/delete')
    .delete(deleteYoutube);

router.route('/orders')
    .get(getAllOrders);

router.route('/review/:productId/:id/delete')
    .delete(deleteReview);

module.exports = router;