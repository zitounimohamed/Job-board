const JWT = require('jsonwebtoken');    
const User = require('../models/user')
const Cv = require('../models/cv')
const {JWT_SECRET} = require ('../config')
const UserS = require('../models/societeUser')
const pass = require('../passport')
signToken = user => {
    return JWT.sign({
        iss : 'jobboard',
        sub : user.id,
        iat: new Date().getTime(),
        exp : new Date().setDate(new Date().getDate()+1),
    },JWT_SECRET)    
}

module.exports = {
        CvByUser : async (req, res) => {
            const { id } = req.params;
            const user = await Cv.findById(id).populate('cv') ; 
            res.send(user.cvs) ;
        },
    
        signUp: async (req, res, next) => {
            const {username,email, password,repeat_password,tel,location,nom} = req.value.body;
            //check if there is user with same email
            const FoundUser = await User.findOne({"local.email":email});
            if (FoundUser){
                return res.status(403).send({error : 'email  is already in use'})}
            const role = "employe"
            //create new user 
            const newUser = new  User ({
                method : 'local',
                local : {
                    username : username,
                    email :email ,
                    password: password,
                    repeat_password : repeat_password,
                    tel : tel,
                    location : location,
                    nom : nom,
                    role : role
                }
                
                });
                
            await newUser.save();
    
            //Generate the token 
            const token = signToken(newUser);
            
            
            //respond with token
            console.log(newUser);
            
            res.status(200).json({token})
            },
    signIn: async (req, res, next) =>{
        //Generate token 
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
     
     res.json(req.user);
    },
    
    signOut: async (req, res, next) => {
        res.clearLocalstorage();
        
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
          
    },
      userprofile : async (req,res)=>{
       try {
            const profile = await User.findById(req.params._id);
            res.json(profile) ;
       } catch (error) {
            res.json({ message : error });
       }
    }
      
    
}