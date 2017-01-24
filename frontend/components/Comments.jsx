var React = require('react');

var LoginForm = require('./LoginForm');
var CommentsForm = require('./CommentsForm');
var CommentsList = require('./CommentsList');
var userStore = require('../stores/stores').userStore;

class Comments extends React.Component {
  state = {
    user: userStore.state.user
  };
  componentWillMount() {
    this.handleStoreChangeBind = this.handleStoreChanged.bind(this);
    userStore.subscribe(this.handleStoreChangeBind);
  }
  componentWillUnmount() {
    userStore.unsubscribe(this.handleStoreChangeBind);
  }
  handleStoreChanged(newState) {
    this.setState({
      user: newState.user
    });
  }
  render() {
    return <div className="comments">
      { this.state.user ? <CommentsForm /> : <LoginForm /> }
      <CommentsList />
    </div>;
  }
}

module.exports = Comments;
