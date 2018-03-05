var path = require("path");

module.exports = function (app) {
    // creating a GET route that responds to localhost:3000 
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    })
    // another GET route that responds to localhost:3000/survey
    app.get("/survey", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    })
}

