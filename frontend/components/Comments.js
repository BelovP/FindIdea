var React = require('react');

var CommentsForm = require('./CommentsForm.js');
var CommentsList = require('./CommentsList.js');

class Comments extends React.Component {
  render() {
    return <div className="comments">
      <CommentsForm />
      <CommentsList />
    </div>;
  }
}

module.exports = Comments;
