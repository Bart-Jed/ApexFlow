const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI
try {
  mongoose.connect (
    dbURI).then(
      () => {console.log("Mongoose is connected")},
      err=> {console.log("Error has occurred!" + err)},
    )
}
catch (e) {
  console.log("Could not connect");
}
require('./trackdays.js');

