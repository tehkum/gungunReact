const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/', require('./controllers/main'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/order', require('./controllers/order'));

module.exports = app;