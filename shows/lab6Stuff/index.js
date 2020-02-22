const Express = require("express");
const chalk = require("chalk");
const pokemon = require('json-pokemon');
const App = Express();
const port = 80;
const cors = require("cors");

App.use(cors());

App.use("/", Express.static("client/build"));

App.get("/api/id/:id", (req, res) => {

    let result = "Sorry, invalid entry.";

    pokemon.forEach((value) => {
        if(req.params.id == value.id) {
            result = value.name;
        }
    });

    if(result.error == "Sorry, invalid entry.") {
        // in red
        console.log(chalk.red(req.path));
    } else {
        // in green
        console.log(chalk.green(req.path));
    }

    res.json(result);

});

App.get("/api/name/:name", (req, res) => {

    let result = "Sorry, invalid entry.";

    pokemon.forEach((value) => {
        if(req.params.name == value.name) {
            result = value.name;
        }
    });

    if(result.error == "Sorry, invalid entry.") {
        // in red
        console.log(chalk.red(req.path));
    } else {
        // in green
        console.log(chalk.green(req.path));
    }

    res.json(result);

});

App.listen(port, () => {
    console.log("Server running!");
});