const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema 

const userSSchema = new Schema({
  
        
    email : {
        type : String,
        required : true , 
    },
    name : {
        type : String,
        required : true, 
    },
    pass : {
        type : String,
        required : true, 
    },
    re_pass : {
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
    
})

userSSchema.pre('save',async function(next){
    try {
        //generate salt
        const salt = await bcrypt.genSalt(10);
        const passhash = await bcrypt.hash(this.pass,salt);
        this.pass = passhash; 
        next(); 
        
    } catch (error) {
        next(error);
    }
})

userSSchema.methods.isValidPass = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.pass) ;
    } catch (error) {
        throw new Error(error);
    }
}

//create model 
const UserS = mongoose.model('userS',userSSchema);

module.exports=UserS;