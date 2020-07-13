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
    file : {
        type: {data: Buffer ,contentType :String},
        required : true
    },
    lettre : {
        type : String , 
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'user'
    },
    jobuser : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'jobs'
    }

})

module.exports= mongoose.model('demande',DemandeSchema) ;
