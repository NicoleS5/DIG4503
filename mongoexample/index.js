const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://nicolesommer:5FwaPbcwSf0Smfn9@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(url, function(err, connection) {
  
  if (err) {
    throw err;
  }

  let database = connection.db("DIG4503-78");
  let collection = database.collection('movies');

  collection.findOne({
    "score": 79
  }, {}, (result) => {
    console.log(result);
  });
 
  connection.close();

});