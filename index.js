const http = require('http');
const app = require('./app');
const {connectDB} = require('./config/database');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dz4znpn9p', 
  api_key: '683865652279141', 
  api_secret: 'EK4bbaPfL8Cu1K3SpVeAaXOkVac' 
});

const port = process.env.PORT || 3000;

connectDB();

const Server = http.createServer(app);


Server.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});