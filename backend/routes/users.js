var express = require('express');
var router = express.Router();
var passport = require('../models/passport');

router.post('/login', passport.authenticate('local'));
router.post('/login', function(req, res, next) {
	// next(error);
	res.json(req.user);
});

router.all('/logout', function(req, res, next) {
	req.logout();
	res.json({ success: true });
});

module.exports = router;
