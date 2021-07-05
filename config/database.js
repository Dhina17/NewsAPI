// Include mongoose
const mongoose = require("mongoose");

// Get the mongodb connection string from env variable
const mongodb_connection_str = process.env.MONGODB_CONNECTION_STRING

// mongoose connection option
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect to the mongodb
mongoose.connect(mongodb_connection_str, options).then(() => {
    console.log("Connected to mongodb successfully")
}, err => {
    Console.log("Database connection failed", err)
})

