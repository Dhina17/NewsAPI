// Include express, body express , api route, database connection
const express = require("express")
const bodyParser = require("body-parser")
var routes = require("./api/routes/news_routes")
require("./config/database")

// Create express app.
const app = express()

// port to run express app
const port = process.env.PORT || 3000

// Use body parser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen to port
app.listen(port)

// call the route function
routes(app)