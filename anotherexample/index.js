const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("client/build"));

App.listen(port, function() {
    console.log("Server running!")
});