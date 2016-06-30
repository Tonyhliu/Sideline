const React = require('react');
const Link = require('react-router').Link;
const StoryActions = require('../actions/story_actions');
const hashHistory = require('react-router').hashHistory;

const StoryIndexItem = React.createClass({
  // editPost(e) {
  //   e.preventDefault();
  //   hashHistory.push(`/stories/${this.props.story.id}/edit`);
  // },

  deletePost(e) {
    e.preventDefault();
    StoryActions.deleteStory(`${this.props.story.id}`);
  },

  render() {
    return(
      <li>
          <h2 className={"story-links"}> <Link to={`/stories/${this.props.story.id}`}>
            {this.props.story.title} </Link>
          </h2>
          <p className={"paragraphs"}>
            {this.props.story.body.slice(0, 300) + "..."}
          </p>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
