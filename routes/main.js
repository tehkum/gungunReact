const express = require('express');
const router = express.Router();


const {getHomePage} = require('../controllers/admin');

router.route('/')
    .get(getHomePage);


module.exports = router;