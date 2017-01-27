var React = require('react');

var userStore = require('../stores/stores.js').userStore;

class CommentsForm extends React.Component {
  handleLoginClick() {
    userStore.login({
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    });
  }

  handleRegisterClick() {
    userStore.register({
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    });
  }

  handleLogoutClick() {
    userStore.logout({
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    });
  }  

  render() {
    return <div className="login-form">
      <input 
        ref="username"
        className="login-form__input _username" 
        name="username"
        type="text"
        placeholder="Username"
      />
      <input 
        ref="password"
        className="login-form__input _password" 
        name="password"
        type="password"
        placeholder="Password"
      />
      <button 
        className="login-form__login-button" 
        onClick={this.handleLoginClick.bind(this)}
      >
        Login
      </button>
      <button 
        className="login-form__register-button" 
        onClick={this.handleRegisterClick.bind(this)}
      >
        Register
      </button>
      <button 
        className="login-form__register-button" 
        onClick={this.handleLogoutClick.bind(this)}
      >
        Logout
      </button>
      <span>Use root as the username and 123 as the password</span>
	  </div>;
  }
}

module.exports = CommentsForm;
