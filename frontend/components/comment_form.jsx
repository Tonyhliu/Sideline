const React = require('react');
const hashHistory = require('react-router').hashHistory;
const StoryActions = require('../actions/story_actions');

const CommentForm = React.createClass({
  getInitialState() {
    return({ body: "" });
  },

  _navigateToStoryShow() {

  },

  render() {
    return (
      <div>

      </div>
    );
  }
});

module.exports = CommentForm;
