const express = require("express");
const app = express()
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// Configuring the database to the backend - server...
const connectDB = require("./db/connect")
require("dotenv").config()

// Importing all the routes!
const tasks = require("./Routes/tasks_route")

// Middlewares! -It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

// Middleware for the router, which does'nt Exist!
// app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000

// Using the routes, url is important here also we must specify the any extra url in th route itself by using "/"
app.use("/api/v1/tasks", tasks);

// In order to use the static files - whole front end, we need to use some special middleware!
app.use(express.static("./public"))

// Connect to the server, when the mongoDB connection is done!
// we use Async/Await as connectDB returns a promise
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on the port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();
