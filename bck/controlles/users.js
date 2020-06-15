const JWT = require('jsonwebtoken');    
const User = require('../models/user')
const Cv = require('../models/cv')
const {JWT_SECRET} = require ('../config')
const UserS = require('../models/societeUser')

signToken = user => {
    return JWT.sign({
        iss : 'jobboard',
        sub : user.id,
        iat: new Date().getTime(),
        exp : new Date().setDate(new Date().getDate()+1)
    },JWT_SECRET)
}

module.exports = {
    signupS: async (req, res, next) => {
        const {email, name,pass,re_pass,nomEn,site,tel,emp,logo,desc} = req.value.body;

        //check if there is user with same email
        const FoundUser = await UserS.findOne({"email":email});
        if (FoundUser){
            return res.status(403).send({error : 'email is already in use'})}

        //create new user 
        const newUserS = new  UserS ({
                email :email,
                name : name,
                pass: pass,
                re_pass : re_pass,
                nomEn : nomEn,
                site : site,
                tel : tel,
                emp : emp,
                desc : desc,            
            });
            
        await newUserS.save();

        //Generate the token 
        const token = signToken(newUserS);
        //const role = signToken(role)
        
        //respond with token
        res.status(200).json({token})
    },
        signUp: async (req, res, next) => {
            const {username,email, password,repeat_password,tel} = req.value.body;
    
            //check if there is user with same email
            const FoundUser = await User.findOne({"local.email":email, "local.username" : username});
            if (FoundUser){
                return res.status(403).send({error : 'email or username is already in use'})}
                const usercv = await Cv.find();
               
            //create new user 
            const newUser = new  User ({
                method : 'local',
                local : {
                    username : username,
                    email :email ,
                    password: password,
                    repeat_password : repeat_password,
                    tel : tel,
                    cv : usercv
                }
                
                });
                
            await newUser.save();
    
            //Generate the token 
            const token = signToken(newUser);
            
            
            //respond with token
            res.status(200).json({token})
            },
    signIn: async (req, res, next) =>{
        //Generate token 
        const token = signToken(req.user);
        res.status(200).json({token});
        
    },
    signin:async (req, res, next) =>{
        const token = signToken(req.user);
        res.status(200).json({token});
    },
    googleOAuth : async(req, res, next) => {
        
        const token = signToken(req.user);
        res.status(200).json({token});
    },
    facebookOAuth : async(req, res, next) =>{
       const token = signToken(req.user);
       res.status(200).json({token});
    },
    secret: async (req, res, next) =>{
     console.log('test') ;
     res.json({secret : "resource"});
           
    },
    signOut: async (req, res, next) => {
        
        
        res.json({ success: true });
      },
      checkAuth: async (req, res, next) => {
        console.log('I managed to get here!');
        res.json({ success: true });
      }, 
      allcv : async(req, res, next)=>{
          const usercv = await User.find().populate('cv');
          res.send(usercv);
          console.log(res);
          
      }
      
    
}