var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/emeka_black_beard_';
mongoose.connect(url);
var db = mongoose.connection;
db.on('erro',console.error.bind(console, 'connection error;'));
db.once('open', function(){
    console.log("connection success");
    var MovieDb = mongoose.Schema({
        movie: String, 
        year: Number, 
        rating: Number
    })
 
var Movies = mongoose.model('Movies',MovieDb,'interns');

var myMovies = [
            {movie: "The Banker", year: "2020", rating: 8},
            {movie: "Bad Boys", year: "2020", rating: 7},
            {movie: "The Hunt", year: "2020", rating: 7},
            {movie: "Bloodshot", year: "2020", rating: 7.5},
            {movie: "First Cow", year: "2020", rating: 6.5} 
    ];



Movies.collection.insert(myMovies, function( err){
    if (err){
        return console.error(err);
    }
    else{
        console.log("Multiple Docs Added to collection")
    }
})

})