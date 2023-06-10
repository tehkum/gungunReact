const express = require('express');
const router = express.Router();


const {getCheckoutPage, checkout, getDeliveryPage, confirmDelivery, getConfirmOrder} = require('../controllers/order');

router.route('/checkout')
    .get(getCheckoutPage)
    .post(checkout);

router.route('/delivery')
    .get(getDeliveryPage)
    .post(confirmDelivery);

router.route('/confirm')
    .get(getConfirmOrder);

module.exports = router;