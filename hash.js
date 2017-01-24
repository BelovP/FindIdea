var bcrypt = require('bcrypt');

console.log( bcrypt.hashSync('12345', 12) );
