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

// Create and export model for business collection.
module.exports = mongoose.model("business", newsSchema, 'business')