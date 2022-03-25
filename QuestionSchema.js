const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    point: {
        type: String
    },
    options:{
        type: String || Array
    }
    
})

module.exports = Question = mongoose.model('question',QuestionSchema)