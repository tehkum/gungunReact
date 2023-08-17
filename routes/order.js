const express = require('express');
const router = express.Router();


const {getCheckoutPage, checkout, getDeliveryPage, confirmDelivery, getConfirmOrder} = require('../controllers/order');

router.route('/checkout')
    .get(getCheckoutPage)
    .post(checkout);

module.exports = router;
