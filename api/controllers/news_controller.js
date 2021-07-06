// Import news model 
const news = require("../models/news")

// Controller function.
// function to get all news from the collection.
exports.getAllNews = (request, response) => {

    // Get the query from the request.
    // link/news?categoy={this value}
    var query = request.query.category

    // Declare model to hold the correct news model 
    var model

    // Assign the model based on category query.
    switch (query) {
        case 'business': {
            model = news.business
            break
        }
        case 'entertainment': {
            model = news.entertainment
            break
        }
        case 'general': {
            model = news.general
            break
        }
        case 'health': {
            model = news.health
            break
        }
        case 'science': {
            model = news.science
            break
        }
        case 'sports': {
            model = news.sports
            break
        }
        case 'technology': {
            model = news.technology
            break
        }
    }

    // Get the all news from the model and send it along with response.
    model.find({}, (error, allNews) => {

        // If error in find(), send the error response with code 500 (Internal Server Error).
        if (error) {
            response.status(500).send(error)
        }

        // If success in find(), send all the news with success code 200.
        response.status(200).send(allNews)
    })
}