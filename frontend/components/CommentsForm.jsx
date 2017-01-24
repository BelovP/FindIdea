var React = require('react');

var commentStore = require('../stores/stores.js').commentStore;

class CommentsForm extends React.Component {
  handleClick() {
    commentStore.addComment({
      avatar: '',
      text: this.refs.text.value,
      liked: false
    });
  }
  render() {
    return <div className="comments__form">
      <textarea ref="text" className="comments__new-text" />
      <button 
        className="comments__new-button" 
        onClick={this.handleClick.bind(this)}
      >
        Add comment
      </button>
	  </div>;
  }
}

module.exports = CommentsForm;
