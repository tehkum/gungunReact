const express = require('express');
const router = express.Router();


const {getHomePage} = require('../controllers/main');

router.route('/')
    .get(getHomePage);


module.exports = router;