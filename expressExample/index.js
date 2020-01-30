const Express = require("express");
const App = Express();
const port = 8080;
const Person = require("./Person.js");

let p = new Person("Nicole", "magenta");

App.get("/", function(Request, Response) {
    Response.send(p.getColor());
});

App.get("/book", function(Request, Response) {
    Response.send("Book");
});

App.listen(port, function() {
    console.log("Server Running!");
});