var React = require('react');

var Comment = require('./Comment.js');
var commentStore = require('../stores/stores.js').commentStore;

class CommentsList extends React.Component {
  state = {
    comments: commentStore.state.comments
  };
  componentWillMount() {
    this.handleStoreChangeBind = this.handleStoreChanged.bind(this);
    commentStore.subscribe(this.handleStoreChangeBind);
  }
  componentWillUnmount() {
    commentsStore.unsubscribe(this.handleStoreChangeBind);
  }
  handleStoreChanged(newState) {
    this.setState({
      comments: newState.comments
    });
  }
  render() {
    var children = [];
    this.state.comments.forEach(function(comment, iComment) {
      children.push(
        <Comment 
          key={iComment}
          avatar={comment.avatar} 
          text={comment.text}
          liked={comment.liked} 
        />
      );
    });
    
    return <div className="comments__list">
       { children }
    </div>;
  }
}

module.exports = CommentsList;
