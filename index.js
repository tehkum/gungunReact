const http = require('http');
const app = require('./app');
const {connectDB} = require('./config/database');
require("dotenv").config();

const port = process.env.PORT || 3000;

connectDB();

const Server = http.createServer(app);


Server.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});