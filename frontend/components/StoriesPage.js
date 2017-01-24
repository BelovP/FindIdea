var React = require('react');

var Comments = require('./Comments');
var LoginForm = require('./LoginForm.jsx');
var StoriesSelector = require('./StoriesSelector.jsx');

class StoriesPage extends React.Component {
  render() {
    return <div className="storiespage">
      <LoginForm />
      <StoriesSelector />
      <Comments />
    </div>;
  }
}

module.exports = StoriesPage;
