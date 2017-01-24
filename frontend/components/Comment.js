var React = require('react');

class Comment extends React.Component {
  state = {
    liked: false
  };
  componentWillMount() {
    this.setState({ liked: this.props.liked });
  }
  componentDidMount() {
  }
  handleClick(e) {
    this.setState({
      liked: !this.state.liked
    });
  }
  render() {
    var avatar = this.props.avatar;
    var text = this.props.text;
    var liked = this.state.liked;
    var likedClass = liked ? "_active" : "";
    return <div className="comment">
			<div className="comment__avatar avatar" style={{
          backgroundImage: "url('" + avatar + "')"
        }}></div>
			<div className="comment__text">{text}</div>
			<div className="comment__actions">
				<button 
          className={"comment__like " + likedClass}
          onClick={this.handleClick.bind(this)}
        />
			</div>
    </div>;
  }
}

module.exports = Comment;