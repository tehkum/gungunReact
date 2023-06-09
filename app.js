const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


// app.use('/', require('./controllers/main'));
app.use('/admin', require('./routes/admin'));
// app.use('order', require('./controllers/order'));

module.exports = app;