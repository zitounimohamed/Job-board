const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cvSchema = mongoose.Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'user'
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
    /*cvfile : {
        type: {data : Buffer, contentType: String},
        required : true},*/
    tel : {
        type: Number,
        required : true},
    exp : {
        type: String,
        required : true}
 

})

module.exports= mongoose.model('cv',cvSchema);