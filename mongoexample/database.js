const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://nicolesommer:5FwaPbcwSf0Smfn9@cluster0-tc9sb.mongodb.net/";

class Database {
  constructor() {

    this.collection = null;
    this.connection = null;

    MongoClient.connect(url, (err, connection) => {
  
      if (err) {
        throw err;
      }
      
      this.connection = connection;
      let database = connection.db("DIG4503-78");
      this.collection = database.collection('movies');
    
      findScore(score) {
        if(this.collection != null) {
          this.collection.findOne({
            "score": score
          }, {}, (err, result) => {
            return result;
        });
      }else {
        return null;
      }       
  }
}

module.exports = Database;
