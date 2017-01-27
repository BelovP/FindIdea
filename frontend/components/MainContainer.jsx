var React = require('react');

var UserPanel = require('./components/UsePanel')

class MainContainer extends React.Component {
  render() {
    return <div className="container-fluid">
      <UserPanel />
      <StoriesPage />
    </div>;
  }
}

module.exports = MainContainer;
