require('./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var stores = require('./stores/stores');
var commentStore = stores.commentStore;
var StoriesPage = require('./components/StoriesPage.js')

ReactDOM.render(
  <StoriesPage />,
  $('#root').get(0)
);

window.$ = $;
console.log("Hello");
console.log("New version");
commentStore.loadData();
