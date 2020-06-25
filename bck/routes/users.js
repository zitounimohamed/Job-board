const express = require('express') ;
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require ('../passport');

const {validateBody , schemas} = require('../helpers/routeHelper');
const UsersController = require('../controlles/users');
const passportjwt = passport.authenticate('jwt',{session: false });
const passportlogin = passport.authenticate('local',{session: false });
const gOAuth = passport.authenticate('googleToken', { session: false });


router.route('/signup')
    .post(UsersController.signUp);
    
router.route('/signupS')
    .post(UsersController.signupS);

router.route('/signin')
    .post(passportlogin,UsersController.signIn);
router.route('/newadmin')
    .post(UsersController.admin);

router.route('/oauth/google')
    .post(gOAuth,UsersController.googleOAuth);

router.route('/oauth/facebook')
.post(passport.authenticate('facebookToken', { session: false }), UsersController.facebookOAuth);

router.route('/secret')
    .get(passportjwt,UsersController.secret);

router.route('/signout')
    .get(passportjwt, UsersController.signOut);

router.route('/status')
    .get(passportjwt, UsersController.checkAuth);
router.route('/profileA/:id')
    .get(UsersController.profileA)
  

module.exports= router;