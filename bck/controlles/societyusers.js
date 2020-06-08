const JWT = require('jsonwebtoken');    
const {JWT_SECRET} = require ('../config')
const UserSociete = require('../models/societeUser')
signToken = user => {
    return JWT.sign({
        iss : 'jobboard',
        sub : user.id,
        iat: new Date().getTime(),
        exp : new Date().setDate(new Date().getDate()+1),
    },JWT_SECRET)    
}
module.exports={
    signupS: async (req, res, next) => {
        const {email, name,pass,re_pass,nomEn,site,tel,emp,logo,desc} = req.body;

        //check if there is user with same email
        const FoundUser = await UserSociete.findOne({"email":email});
        if (FoundUser){
            return res.status(403).send({error : 'email is already in use'})}
            const role = "societe"

        //create new user 
        const newUserS = new  UserSociete ({
                email :email ,
                name : name,
                pass: pass,
                re_pass : re_pass,
                nomEn : nomEn,
                site : site,
                tel : tel,
                emp : emp,
                logo : logo ,
                desc : desc ,
                role : role           
            
            });
            
        await newUserS.save();

        //Generate the token 
        const token = signToken(newUserS);
        //const role = signToken(role)
        
        //respond with token
        res.status(200).json({token})
    },
   
    signIn: async (req, res, next) =>{
        //Generate token 
        const token = signToken(req.user); 
        res.status(200).json({token});
        
    },
    secretS: async (req, res, next) =>{
            console.log('test') ;
            
            res.json(req.user);
    }
}