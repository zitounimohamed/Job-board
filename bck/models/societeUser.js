const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema 

const userSSchema = new Schema({
    method : {
        type: String,
        enum : ['local'],
        required : true 
        
    },
    local : {
    isClient : {
        type : Boolean
    },
    isAdmin : {
        type : Boolean
    },
        
    email : {
        type : String,
        required : true , 
    },
    name : {
        type : String,
        required : true, 
    },
    password : {
        type : String,
        required : true, 
    },
    repeat_password : {
        type : String,
        required : true, 
    },
    nomEn : {
        type : String,
        required : true, 
    },
    site : {
        type : String,
        required : true, 
    },
    tel : {
        type : Number,
        required : true 
    },
    emp : {
        type : String,
        required : true, 
    },
    /*logo :{
        type: {data: Buffer ,contentType :String},
        required : true
    },*/
    desc : {
        type : String,
        required : true  
    }
}
})

userSSchema.pre('save', async function(next){
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

userSSchema.methods.isValidPass = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password) ;
    } catch (error) {
        throw new Error(error);
    }
}


//create model 
const UserS = mongoose.model('userS',userSSchema);

module.exports=UserS;