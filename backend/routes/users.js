var express = require('express');
var router = express.Router();
var passport = require('../models/passport');

router.post('/login', passport.authenticate('local'));
router.post('/login', function(req, res, next) {
	// next(error);
	console.log('login in router');
	res.json(req.user);
});

router.post('/register', passport.register);

router.all('/logout', function(req, res, next) {
	console.log('logout');
	req.logout();
	res.json({ success: true });
});

module.exports = router;
