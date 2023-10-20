const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const app = express()
const port = process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.use('/api/books', require('./routes/bookRoutes'))

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
