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
    file : {
        type : String,
        required : true },
    salaire : {
        type:Number,
        required : true 
    },
    genre : {
        type : String ,
        required : true
    },
    dateexp: {
        type : Date ,
        required : true
    }, 
    exigences : {
        type : String ,
        required : true 
    },
    education : {
        type : String ,
        required : true 
    },
    experience : {
        type : String , 
        required : true 
    },
    autres : {
        type : String,
        required : true 
    }
    
 

})

module.exports= mongoose.model('jobs',jobSchema);