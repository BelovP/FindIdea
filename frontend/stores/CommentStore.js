var $ = require('jquery');

var BaseStore = require('./BaseStore');

class CommentStore extends BaseStore {
  state = {
    comments: []
  };

  addComment(newComment) {
    var store = this;
    $.ajax({
      url: '/comments/new',
      method: 'post', dataType: 'json',
      data: newComment,
      success: function(data) {
        store.loadData();
      }
    });
    // this.state.comments = [newComment].concat(this.state.comments);
    // this.update();
  }

  loadData() {
    var store = this;
    $.ajax({
      url: '/comments',
      method: 'get', dataType: 'json',
      success: function(data) {
        console.log(data);
        store.state.comments = data;
        store.update();
      }
    });
  }

  showMyStories(user_id) {
    console.log(user_id);
    var store = this;
    $.ajax({
      url: '/comments/my',
      method: 'get', dataType: 'json',
      data: user_id,
      success: function(data) {
        console.log(data);
        store.state.comments = data;
        store.update();
      }
    });
  }
}

module.exports = CommentStore;
