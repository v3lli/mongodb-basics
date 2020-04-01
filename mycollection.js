var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost:27017/emeka_black_beard_";

// var Admin = "emeka[black beard]";

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }, function(err ,db){
    var dbmi = db.db("emeka_black_beard_");

    if (err) throw err;
    console.log("Database created by emeka[black beard]")
    dbmi.createCollection("interns", function(err ,result){
        if (err) throw err;
        console.log("Intern Coollection has been created!");
        db.close
    });
});