const mongoose = require('mongoose');


const DemandeSchema = mongoose.Schema({
    nom : {
        type : String , 
        required : true 
    },
    email : {
        type : String , 
        required : true 
    },
    cvfile : {
        type: {data: Buffer ,contentType :String},
        required : true
    },
    lettre : {
        type : String , 
        required : true
    }

})

module.exports= mongoose.model('demande',DemandeSchema) ;
