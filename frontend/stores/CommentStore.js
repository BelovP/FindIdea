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
}

module.exports = CommentStore;
