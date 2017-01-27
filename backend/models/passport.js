var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
var db = require('./db');

var salt = bcrypt.genSaltSync(10);

passport.use(new LocalStrategy(
	function(username, password, done) {
		console.log('we are in passport');
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

passport.register = function(req, res, done) {
  console.log('We are in register');
  //var user = new User({ username: req.body.email, password: req.body.password});
  console.log('And again');
  var username = req.body.username;
  var password = req.body.password;
  var hash = bcrypt.hashSync(password, salt);
  console.log(hash);
  db.get('SELECT * FROM users WHERE username = ?', [username], function(err, row) {
			if (err) { console.log('err');done(err); }
			if (!row) {
				console.log("INSERT INTO users VALUES(" + 3 + ",\'" + username + "\',\'" + password + "\',\'SuperAdmin" + "\',\'avatar1.png\'" + ")"); 
				db.run("INSERT INTO users(username, password, name, avatar) VALUES(\'" + username + "\',\'" + bcrypt.hashSync(password, salt) + "\',\'SuperAdmin" + "\',\'avatar1.png\'" + ")"); }
			else {
				console.log('user exists');
				done(null, false, { message: 'User already exists'});
			}
		});
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/private');
      });
  });
};

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

module.exports = passport;
