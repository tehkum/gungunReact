const express = require('express');
const router = express.Router();


const {getHomePage, reviewProduct} = require('../controllers/main');

router.route('/')
    .get(getHomePage);

router.route('/products/review').post(reviewProduct);




module.exports = router;