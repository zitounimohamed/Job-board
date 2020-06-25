const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema 

const userSchema = new Schema({
    method : {
        type: String,
        enum : ['local','google','facebook'],
        required : true 
        
    },
    local : {
        isAdmin : {
            type : Boolean
        },
        isClient : {
            type : Boolean,
        },
        username : {
            type: String,
            lowercase : true 
        },
        email: {
            type: String,
            lowercase: true 
        } ,
        nom :{
            type :String,
        },
        password : {
            type : String,
        },
        repeat_password : {
            type: String
        },
        tel : {
            type : Number,

        },
        location :{
            type : String,
        },
        cvs : [
           {type: mongoose.Schema.Types.ObjectId,ref:'cv'}
        ],
        
    },
    google : {
        id: {
            type : String ,

        },
        email : {
            type :String , 
            lowercase : true 
        }
    },
    facebook : {
        id: {
            type : String 

        },
        email : {
            type :String , 
            lowercase : true 
        }
        
    },
    
   
})

userSchema.pre('save', async function(next){
    try {

        if(this.method !== 'local') {
            next();
        }
        //generate salt
        const salt = await bcrypt.genSalt(10);
        //generate a password hash(salt + hash)
        const passwordhash = await bcrypt.hash(this.local.password,salt);
        this.local.password= passwordhash ; 
        next(); 
        
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isValid = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password) ;
    } catch (error) {
        throw new Error(error);
    }
}

// create model 
const User =mongoose.model('user',userSchema);


//Export model 
module.exports= User ;