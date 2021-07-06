// Include mongoose
const mongoose = require("mongoose")

// Get the Scheme
const schema = mongoose.Schema

// Create schema for the news model
// based on database collection documents.
const newsSchema = new schema({
    source: {
        id: String,
        name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String
})

// Create models for all news collections in our database.
var businessModel = mongoose.model("business", newsSchema, "business")
var entertainmentModel = mongoose.model("entertainment", newsSchema, "entertainment")
var generalModel = mongoose.model("general", newsSchema, "general")
var healthModel = mongoose.model("health", newsSchema, "health")
var scienceModel = mongoose.model("science", newsSchema, "science")
var sportsModel = mongoose.model("sports", newsSchema, "sports")
var technologyModel = mongoose.model("technology", newsSchema, "technology")

// Export the models
module.exports = {
    business: businessModel,
    entertainment: entertainmentModel,
    general: generalModel,
    health: healthModel,
    science: scienceModel,
    sports: sportsModel,
    technology: technologyModel
}