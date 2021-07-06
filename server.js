// Include express, body express , api route, database connection
const express = require("express")
var routes = require("./api/routes/news_routes")
require("./config/database")

// Create express app.
const app = express()

// port to run express app
const port = process.env.PORT || 3000

// Use express.{urlencoded(), json()} middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen to port
app.listen(port, () => {
    console.log("app is running in " + port)
})

// call the route function
routes(app)