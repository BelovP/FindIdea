require('./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var stores = require('./stores/stores');
var commentStore = stores.commentStore;
var StoriesPage = require('./components/StoriesPage.jsx')

$.ajax({
            url:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
           	crossorigin:"anonymous",
           	integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",
            success:function(data){
                 $("<style></style>").appendTo("head").html(data);
            }
        })

ReactDOM.render(
  <StoriesPage />,
  $('#root').get(0)
);

window.$ = $;
commentStore.loadData();
