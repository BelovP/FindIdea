var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('project.sqlite3');

module.exports = db;
