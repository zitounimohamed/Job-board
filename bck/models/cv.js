const mongoose = require('mongoose');


const cvSchema = mongoose.Schema({
    writer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    file : {
        type : String , 
        
    },
    titre : {
        type: String,
        required : true},
    type : {
        type: String,
        required : true},
    categ : {
        type: String,
        required : true},
    comp : {
        type: String,
        required : true},
    filep : {
        type: String,
    },
    tel : {
        type: Number,
        required : true},
    exp : {
        type: String,
        required : true}
 

})

module.exports= mongoose.model('cv',cvSchema);