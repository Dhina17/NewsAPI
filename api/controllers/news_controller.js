// Import news model 
const news = require("../models/news")

// Controller function.
// function to get all news from the collection.
exports.getAllNews = (request, response) => {
    news.business.find({}, (error, allNews) => {

        // If error in find(), send the error response with code 500 (Internal Server Error).
        if (error) {
            response.status(500).send(error)
        }

        // If success in find(), send all the news with success code 200.
        response.status(200).send(allNews)
    })
}