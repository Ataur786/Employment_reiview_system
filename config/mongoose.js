const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://ataur3895:Ataur123@cluster0.kxhsixd.mongodb.net/employee`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
