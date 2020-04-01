
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/emeka_black_beard_";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created by emeka[black beard]");
    db.close(); 
    });