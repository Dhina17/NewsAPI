// Create route function.
module.exports = function (app) {

    // Import news controller.
    var newsController = require("../controllers/news_controller")

    // get action for / endpoint
    app.route("/")
        .get(newsController.getHome)


    // get action for /news endpoint
    app.route("/news")
        .get(newsController.getAllNews)

}