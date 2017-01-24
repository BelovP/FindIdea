var CommentStore = require('./CommentStore');
var UserStore = require('./UserStore');

var commentStore = new CommentStore();
var userStore = new UserStore();

module.exports = {
	commentStore: commentStore,
	userStore: userStore
};
