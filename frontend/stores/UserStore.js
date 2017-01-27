var $ = require('jquery');

var BaseStore = require('./BaseStore');

class UserStore extends BaseStore {
  state = {
    user: null
  };
  login(userdata) {
    console.log(userdata);
    console.log('in login');
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
    console.log(userdata);
    console.log('in register');
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
    console.log('in logout');
    $.ajax({
      url: '/users/logout',
      method: 'post', dataType: 'json',
    });
  	this.state.user = null;
  	this.update();
  }
}

module.exports = UserStore;
