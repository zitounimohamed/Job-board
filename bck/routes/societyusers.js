const express = require('express') ;
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require ('../passport');
const passportlogin = passport.authenticate('local',{session: false });

const passportjwt = passport.authenticate('jwt',{session: false });

const {validateBody , schemas} = require('../helpers/routeHelp');
const UsersController = require('../controlles/societyusers');

router.post('/signupS',UsersController.signupS)


router.get('/secretS',passportjwt,UsersController.secretS);
    

router.post('/signin',validateBody(schemas.lSchema),UsersController.signIn);

module.exports= router;