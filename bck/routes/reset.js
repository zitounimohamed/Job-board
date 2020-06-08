const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controlles/resetpass');

router.post('/req-reset-password', AuthCtrl.ResetPassword);
router.post('/new-password', AuthCtrl.NewPassword);
router.post('/valid-password-token', AuthCtrl.ValidPasswordToken);


module.exports = router;
