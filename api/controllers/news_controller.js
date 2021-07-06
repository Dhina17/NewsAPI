// Import news model 
const news = require("../models/news")

// Controller function.
// function to get all news from the collection.
exports.getAllNews = (request, response) => {

    // Get the query from the request.
    // link/news?categoy={value}&page={value}

    // category value from the query
    var category = request.query.category

    // page value from the query
    // If the page query is empty, value will be NaN.
    var page = parseInt(request.query.page)

    // page size which I want it as static.
    var pageSize = 10

    // If page size is less than or equal to 0,
    // Send error with code 400 bad request.
    if (page < 0 || page === 0) {
        err = response = {
            "error": true,
            "message": "invalid page number," +
                "should start with 1"
        };
        response.status(400).send(err)
    }

    // Declare model to hold the correct news model 
    var model

    // Assign the model based on category query.
    switch (category) {
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

    // db query options to provide datas based on page.
    var dbQuery = {}
    // Skip the data based on page.
    // If the page query is empty, skip = NaN (because of parseInt()).
    // So,first {pageSize} data will be provided.
    // If page = 1, we want to provide first 10 data.
    // skip = 10 * (1 - 1) = 0.
    // Here we skipped 0 data.
    // If page = 2, we want to provide second 10 data.
    // skip = 10 * (2 - 1) = 10.
    // Here we skip first 10 data (i.e) first page.
    dbQuery.skip = pageSize * (page - 1)
    // we are limiting the size of the data (i.e) page size.
    // Here want only 10 datas per page.
    dbQuery.limit = pageSize

    // Get news from the model based on dbQuery options and send it along with response.
    model.find({}, {}, dbQuery, (error, allNews) => {

        // If error in find(), send the error response with code 500 (Internal Server Error).
        if (error) {
            response.status(500).send(error)
        }

        // If success in find(), send all the news with success code 200.
        response.status(200).send(allNews)
    })
}