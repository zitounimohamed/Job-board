const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs')
const adminS = new mongoose.Schema({
    methods :{
        type : String,
        enum :['local']
    },
    local : {
    email : {
        type : String , 
        required : true 
    },
    password : {
        type : String ,
        required : true
    },
    nom : {
        type : String ,
        required : true
    },
    isAdmin :{
        type : Boolean,
        required : true
    }}
})

adminS.pre('save', async function(next){
    try {
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

adminS.methods.isValidA = async function(newpassword) {
    try {
        return await bcrypt.compare(newpassword,this.local.password) ;
    } catch (error) {
        throw new Error(error);
    }
}

const Admin = mongoose.model('admin',adminS)

module.exports=Admin ;