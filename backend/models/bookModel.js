const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    id : {
        type: int,
        required: true
    },
    type : {
        type: string,
        required: true
    },
    desc : {
        type: string,
        required: true
    },
    cover : {
        type: string,
        reqiured: true
    }
}) 


module.exports = bookSchema