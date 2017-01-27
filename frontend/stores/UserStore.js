var $ = require('jquery');

var BaseStore = require('./BaseStore');

class UserStore extends BaseStore {
  state = {
    user: null
  };
  login(userdata) {
    var store = this;
    $.ajax({
      url: '/users/login',
      method: 'post', dataType: 'json',
      data: userdata,
      success: function(data) {
        store.state.user = data;
        store.update();
      }
    });
  }

  register(userdata) {
    var store = this;
    $.ajax({
      url: '/users/register',
      method: 'post', dataType: 'json',
      data: userdata,
      success: function(data) {
        store.state.user = data;
        store.update();
      }
    });
  }

  logout() {
    $.ajax({
      url: '/users/logout',
      method: 'post', dataType: 'json',
    });
  	this.state.user = null;
  	this.update();
  }
}

module.exports = UserStore;
