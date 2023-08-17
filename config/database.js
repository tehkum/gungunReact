const mongoose = require("mongoose");

const url = "mongodb+srv://gungunsewing:qoIlMgylnJmcEPJH@cluster0.bipgqft.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  }
}




// const { MongoClient } = require('mongodb');
// const mongoose = require("mongoose");

// const url = "mongodb+srv://gungunsewing:qoIlMgylnJmcEPJH@cluster0.bipgqft.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectDB() {
//   try {
//     const db = client.db('gungunsewing');
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');


//   } catch (error) {
//     console.error('Error connecting to MongoDB Atlas', error);
//   } finally {
    
//     await client.close();
//  }
// }

// const URL = "mongodb://localhost:27017";

// const connectDB = () => {
//   // mongoose
//   //   .connect(URL, {
//   //     dbName: "backend",
//   //   })
//   //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
//   //   .catch((e) => console.log(e));
//   // mongoose
//   //   .connect("mongodb://localhost:27017/backend", {
//   //     useNewUrlParser: true,
//   //     useUnifiedTopology: true,
//   //     useCreateIndex: true,
//   //   })
//   //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
//   //   .catch((e) => console.log(e));

//   mongoose.connect('mongodb://127.0.0.1:27017/backend', { useNewUrlParser: true, useUnifiedTopology: true }).then((c) => console.log(`Database Connected with ${c.connection.host}`))
//  .catch((e) => console.log(e));

// };

module.exports = {
  connectDB
};
