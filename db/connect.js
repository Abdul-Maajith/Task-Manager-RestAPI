const mongoose = require("mongoose");

const connectDB = (url) => {
  // To remove the deprecation warning, use certain objects(key: value)..
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

// then we need to setup on app.js, in order to Connect to the server, when the mongoDB connection is done!

module.exports = connectDB