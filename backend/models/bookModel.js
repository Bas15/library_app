const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    id : {
        type: int,
        required: true
    },
    type : {
        type: string,
        required: [true, 'please add a text value' ]
    },
    desc : {
        type: string,
        required: [true, 'please add a text value' ]
    },
    cover : {
        type: string,
        reqiured: [true, 'please add a text value' ]
    }
}) 


module.exports = bookSchema