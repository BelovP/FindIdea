'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseStore = function () {
  function BaseStore() {
    _classCallCheck(this, BaseStore);

    this.subscribed = [];
  }

  BaseStore.prototype.update = function update() {
    var state = this.state;
    this.subscribed.forEach(function (subscribe) {
      subscribe(state);
    });
  };

  BaseStore.prototype.subscribe = function subscribe(listener) {
    this.subscribed.push(listener);
  };

  BaseStore.prototype.unsubscribe = function unsubscribe(listener) {
    var index = this.subscribed.indexOf(listener);
    if (index != -1) {
      this.subscribed.splice(index, 1);
    }
  };

  return BaseStore;
}();

var CommentStore = function (_BaseStore) {
  _inherits(CommentStore, _BaseStore);

  function CommentStore() {
    var _temp, _this, _ret;

    _classCallCheck(this, CommentStore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _BaseStore.call.apply(_BaseStore, [this].concat(args))), _this), _this.state = {
      comments: [{
        avatar: '',
        text: 'My comment is here',
        liked: false
      }, {
        avatar: '',
        text: 'Different text',
        liked: true
      }, {
        avatar: '',
        text: 'Third comment',
        liked: false
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CommentStore.prototype.addComment = function addComment(newComment) {
    this.state.comments = [newComment].concat(this.state.comments);
    this.update();
  };

  return CommentStore;
}(BaseStore);

var commentStore = new CommentStore();

var Comment = function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, Comment);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this2), _this2.state = {
      liked: false
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  Comment.prototype.componentWillMount = function componentWillMount() {
    this.setState({ liked: this.props.liked });
  };

  Comment.prototype.componentDidMount = function componentDidMount() {};

  Comment.prototype.handleClick = function handleClick(e) {
    this.setState({
      liked: !this.state.liked
    });
  };

  Comment.prototype.render = function render() {
    var avatar = this.props.avatar;
    var text = this.props.text;
    var liked = this.state.liked;
    var likedClass = liked ? "_active" : "";
    return React.createElement(
      'div',
      { className: 'comment' },
      React.createElement('div', { className: 'comment__avatar avatar', style: {
          backgroundImage: "url('" + avatar + "')"
        } }),
      React.createElement(
        'div',
        { className: 'comment__text' },
        text
      ),
      React.createElement(
        'div',
        { className: 'comment__actions' },
        React.createElement('button', {
          className: "comment__like " + likedClass,
          onClick: this.handleClick.bind(this)
        })
      )
    );
  };

  return Comment;
}(React.Component);

var CommentsList = function (_React$Component2) {
  _inherits(CommentsList, _React$Component2);

  function CommentsList() {
    var _temp3, _this3, _ret3;

    _classCallCheck(this, CommentsList);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this3), _this3.state = {
      comments: commentStore.state.comments
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  CommentsList.prototype.componentWillMount = function componentWillMount() {
    this.handleStoreChangeBind = this.handleStoreChanged.bind(this);
    commentStore.subscribe(this.handleStoreChangeBind);
  };

  CommentsList.prototype.componentWillUnmount = function componentWillUnmount() {
    commentsStore.unsubscribe(this.handleStoreChangeBind);
  };

  CommentsList.prototype.handleStoreChanged = function handleStoreChanged(newState) {
    this.setState({
      comments: newState.comments
    });
  };

  CommentsList.prototype.render = function render() {
    var children = [];
    this.state.comments.forEach(function (comment) {
      children.push(React.createElement(Comment, {
        avatar: comment.avatar,
        text: comment.text,
        liked: comment.liked
      }));
    });

    return React.createElement(
      'div',
      { className: 'comments__list' },
      children
    );
  };

  return CommentsList;
}(React.Component);

var CommentsForm = function (_React$Component3) {
  _inherits(CommentsForm, _React$Component3);

  function CommentsForm() {
    _classCallCheck(this, CommentsForm);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  CommentsForm.prototype.handleClick = function handleClick() {
    commentStore.addComment({
      avatar: '',
      text: this.refs.text.value,
      liked: false
    });
  };

  CommentsForm.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'comments__form' },
      React.createElement('textarea', { ref: 'text', className: 'comments__new-text' }),
      React.createElement(
        'button',
        {
          className: 'comments__new-button',
          onClick: this.handleClick.bind(this)
        },
        'Add comment'
      )
    );
  };

  return CommentsForm;
}(React.Component);

var Comments = function (_React$Component4) {
  _inherits(Comments, _React$Component4);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Comments.prototype.render = function render() {
    return React.createElement(
      'div',
      { 'class': 'comments' },
      React.createElement(CommentsForm, null),
      React.createElement(CommentsList, null)
    );
  };

  return Comments;
}(React.Component);

ReactDOM.render(React.createElement(Comments, null), $('#root').get(0));