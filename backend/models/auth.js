var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
var db = require('./db');

// var passwordHash = bcrypt.hashSync('pass', 12);
// console.log(passwordHash);

passport.use(new LocalStrategy(
	function(username, password, done) {

		db.get('SELECT * FROM users WHERE username = ?', [username], function(err, row) {
			if (err) {
				done(err);
			}
			if (!row) {
				done(null, false, { message: 'Incorrect credentials' });
			}

			if (bcrypt.compareSync(password, row.password)) {
				done(null, {
					id: row.id,
					username: row.username,
					name: row.name
				});
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

module.exports = {
	loggedIn: function(req, res, next) {
		if (req.user) {
			next();
		} else {
			var err = new Error('Authentication required')
			err.status = 401;
			next(err);
		}
	}
};
