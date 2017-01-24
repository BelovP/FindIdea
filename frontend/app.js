require('./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Comments = require('./components/Comments.js');
var CommentsForm = require('./components/CommentsForm.js');
var stores = require('./stores/stores.js');
var commentStore = stores.commentStore;
var loginForm = require('./components/LoginForm.jsx');


ReactDOM.render(
  <LoginForm />,
  $('#root').get(0)
);

ReactDOM.render(
  <Comments />,
  $('#root').get(0)
);

window.$ = $;
console.log("Hello");
console.log('New version');
commentStore.loadData();
