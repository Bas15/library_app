const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    genre : {
        type: String,
        required: [true, 'please add a text value' ]
    },
    desc : {
        type: String,
        required: [true, 'please add a text value' ]
    },
    cover : {
        type: String,
        required: [true, 'please add a text value' ]
    },
    },
    {
        timestamps: true
    }
) 


module.exports = mongoose.model('Book', bookSchema)