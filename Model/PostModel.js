const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: "string",
        required: true,
    }    ,
    description: {
        type: "string",
        required: true,
    },
    data:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts',PostSchema)

