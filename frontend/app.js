require('./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Comments = require('./components/Comments.js');
var CommentsForm = require('./components/CommentsForm.js');
var stores = require('./stores/stores.js');
var commentStore = stores.commentStore;
var loginForm = require('./components/LoginForm.jsx');
var StoriesPage = require('./components/StoriesPage.jsx');
var MainContainer = require('./components/MainContainer.jsx')


// bootstrap link   
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
$.ajax({
            url:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
           	crossorigin:"anonymous",
           	integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
            success:function(data){
                 $("<style></style>").appendTo("head").html(data);
            }
        })

// // Static part
// ReacDom.render(
// 	<MainContainer />,
// 	$('body').get(0)
// );

// Dynamic part
ReactDOM.render(
  <StoriesPage />,
  $('#root').get(0)
);

window.$ = $;
// console.log("Hello");
// console.log('New version');
commentStore.loadData();
