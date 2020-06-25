const JWT = require('jsonwebtoken');    
const User = require('../models/user')
const Cv = require('../models/cv')
const {JWT_SECRET} = require ('../config')
const UserS = require('../models/societeUser');
const AdminS = require('../models/admin');
signToken = user => {
    return JWT.sign({
        isAdmin : user.isAdmin,
        isClient : user.isClient,
        id : user._id,
        iss : 'jobboard',
        sub : user.id,
        iat: new Date().getTime(),
        exp : new Date().setDate(new Date().getDate()+1)
    },JWT_SECRET)
}

module.exports = {
    signupS: async (req, res, next) => {
     //   const {email, name,password,repeat_password,nomEn,site,tel,emp,desc} = req.body;

        //check if there is user with same email
        const FoundUser = await UserS.findOne({"local.email":req.body.email});
        if (FoundUser){
            return res.status(403).send({error : 'email is already in use'})}

        //create new user 
        const newUserS = new  UserS ({
            method : 'local',
            local : {
                email :req.body.email,
                name : req.body.name,
                password: req.body.password,
                repeat_password : req.body.repeat_password,
                nomEn : req.body.nomEn,
                site : req.body.site,
                tel : req.body.tel,
                emp : req.body.emp,
                desc : req.body.desc,   
                isClient : false ,
                isAdmin : false        
            }});
        await newUserS.save();
            
            
        //Generate the token 
        const token = signToken(newUserS);
        //const role = signToken(role)
        
        //respond with token
        res.status(200).json({token})
    },
    signUp: async (req, res, next) => {
           // const {username,email, password,repeat_password,tel,isClient} = req.value.body;
    
            //check if there is user with same email
            const FoundUser = await User.findOne({"local.email":req.body.email, "local.username" :req.body.username});
            if (FoundUser){
                return res.status(403).send({error : 'email or username is already in use'})}
                const usercv = await Cv.find();
               
            //create new user 
            const newUser = new  User ({
                method : 'local',
                local : {
                    username : req.body.username,
                    email :req.body.email,
                    password: req.body.password,
                    repeat_password : req.body.repeat_password,
                    tel : req.body.tel,
                    cv : req.body.usercv,
                    isClient : true,
                    isAdmin : false
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
        const signinUser= signToken(req.user) 
        console.log(req.user);
                       
            res.send({
            token: signToken(signinUser),
            id : req.user._id,
            isClient : req.user.local.isClient ,
            isAdmin : req.user.local.isAdmin     
            });
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
    admin : async(req, res, next)=>{
        //create new admin 
        try {
            
            const Newadmin = new AdminS({
                method : 'local',
                local :{ 
                email :"hammazitouni77@gmail.com",
                password: "26874846m",
                nom : "Mohamed Zitouni",
                isAdmin : true}
               
    
            })
            const Admin = await Newadmin.save();
            const token = signToken(Admin);
            res.status(200).json({token})
        } catch (error) {
            res.send({msg : error.message})
        }
    },
    profileA : async (req, res, next)=>{
        try {
            const admin =await AdminS.findById(req.params.id)
            res.json(admin)
        } catch (error) {
            console.log(error);
            
        }
    }
   

      
    
}