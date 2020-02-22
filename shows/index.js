const Express = require("express");
const App = Expres();
const port = 80;
const fs = require("fs");

const contents = fs.readFileSync("database.json");
let database = JSON.parse(contents);

const cors = require("cors");
App.use(cors());

App.get("/shows/name/:name", (req,res) => {
  
  let result = {"error": "Could not find name!"};

  res.json(result);

});

App.get("/shows/score/:score", () => {

  let result = {"error": "Could not find name!"};

  res.json(result);

});

App.get("/shows/episode/:episode", () => {

  let result = {"error": "Could not find name!"};

  res.json(result);

});

App.listen(port, () => {

});

