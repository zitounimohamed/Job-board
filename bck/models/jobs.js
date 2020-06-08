const mongoose = require('mongoose');


const jobSchema = mongoose.Schema({
    
    email : {
        type: String,
        required : true},
    title : {
        type: String,
        required : true},
    location : {
        type: String,
        required : true},
    region : {
        type: String,
        required : true},
    type : {
        type: String,
        required : true},
    description : {
        type: String,
        required : true},
    company_name : {
        type: String,
        required : true},
    tagline : {
        type: String,
        required : true},
    cDisc :{
        type: String,
        required : true},
    site : {
        type: String,
        required : true},
    file : {
        type : String,
        required : true },
    
 

})

module.exports= mongoose.model('jobs',jobSchema);