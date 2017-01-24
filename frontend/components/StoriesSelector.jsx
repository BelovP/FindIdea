var React = require('react');

class StoriesSelector extends React.Component {
  handleTopButtonClick() {
  }

  handleMyIdeasButtonClick() {
  }

  handleNewButtonClick() {
  }  

  render() {
    return <div className="stories-selector">
      <button 
        className="stories_selector__new-button" 
        onClick={this.handleNewButtonClick.bind(this)}
      >
        New
      </button>
      <button 
        className="stories_selector__top-button" 
        onClick={this.handleTopButtonClick.bind(this)}
      >
        Top
      </button>
      <button 
        className="stories_selector__my-ideas-button" 
        onClick={this.handleMyIdeasButtonClick.bind(this)}
      >
        My Ideas
      </button>
	  </div>;
  }
}

module.exports = StoriesSelector;
