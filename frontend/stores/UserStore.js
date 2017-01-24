var $ = require('jquery');

var BaseStore = require('./BaseStore');

class UserStore extends BaseStore {
  state = {
    user: null
  };
  login(userdata) {
    console.log(userdata);
    console.log('in userdata');
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
  logout() {
  	this.state.user = null;
  	this.update();
  }
}

module.exports = UserStore;
