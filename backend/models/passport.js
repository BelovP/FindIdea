var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
var db = require('./db');

passport.use(new LocalStrategy(
	function(username, password, done) {
		db.get('SELECT * FROM users WHERE username = ?', [username], function(err, row) {
			if (err) { done(err); }
			if (!row) { done(null, false, { message: 'Incorrect user'}); }
			if (bcrypt.compareSync(password, row.password)) {
				done(null, { 
					id: row.id, 
					avatar: row.avatar,
					username: row.username,
					name: row.name
				});
			} else {
				done(null, false, { message: 'Incorrect user'});
			}
		});
	}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

module.exports = passport;
