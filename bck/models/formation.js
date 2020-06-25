const mongoose = require('mongoose')

const formation = mongoose.Schema({
    email : {
        type: String,
        required : true},
    titre : {
        type: String,
        required : true},
    lieu : {
        type: String,
        required : true},
    ville : {
        type: String,
        required : true},
    type : {
        type: String,
        required : true},
    description : {
        type: String,
        required : true}
})

module.exports = mongoose.model('formation',formation)