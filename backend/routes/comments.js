var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res, next) {
	db.all(`
		SELECT
			comments.id, 
			comments.user_id, 
			comments.text, 
			comments.liked,
			users.avatar, 
			users.name
		FROM comments 
			INNER JOIN users ON users.id = comments.user_id
		ORDER BY comments.id DESC
	`, [], function(err, comments) {
		if (err) return next(err);
		res.json(comments.map(function(comment) {
			return {
				id: comment.id,
				userId: comment.user_id,
				text: comment.text,
				avatar: comment.avatar,
				liked: comment.liked == 1
			};
		}));
	});
});

router.post('/new', function(req, res, next) {
	if (req.user) {
		next();
	} else {
		var err = new Error('You must be logged in');
		err.status = 401;
		next(err);
	}
});
router.post('/new', function(req, res, next) {
	if (typeof req.body == 'object' && req.body.text != null) {
		db.run(`
			INSERT INTO comments(user_id, text, liked) values(?, ?, 0)
		`, [req.user.id, req.body.text], function(err) {
			if (err) return next(err);
			res.json({
				id: this.lastID
			});
		});
	} else {
		next(new Error('Wrong data provided'));
	}
});


module.exports = router;
