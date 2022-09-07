require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// Add database connection
const uri =
  'mongodb+srv://auden:admin@mycluster.fw6glvi.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewURLParser: true });

client.connect((err, db) => {
  if (!err) console.log('MongoDB Connected');
  else {
    console.log('DB Error:', err);
    process.exit(1);
  }
});

exports.MongoClient = client;
