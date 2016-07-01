const React = require('react');
const Link = require('react-router').Link;
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const hashHistory = require('react-router').hashHistory;

const StoryIndexItem = React.createClass({
  editPost(e) {
    e.preventDefault();
    hashHistory.push(`/stories/${this.props.story.id}/edit`);
  },

  deletePost(e) {
    e.preventDefault();
    StoryActions.deleteStory(`${this.props.story.id}`);
  },

  render() {
    debugger
    const user = StoryStore.find(this.props.story.id);

    return(
      <li className="story-index-item">
          <h4 className="story-author">{user}</h4>
          <h2 className="story-links">
            <Link to={`/stories/${this.props.story.id}`}>
              {this.props.story.title}
            </Link>
          </h2>
          <p className={"paragraphs"}>
            {this.props.story.body.slice(0, 300) + "..."}
          </p>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
