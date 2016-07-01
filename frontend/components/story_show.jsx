const React = require('react');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const Button = require('react-bootstrap').Button;

const StoryShow = React.createClass({
  getInitialState() {
    const potentialStory = StoryStore.find(this.props.params.storyid);
    return ({ story: potentialStory ? potentialStory : {} });
  },

  componentDidMount() {
    this.storyListener = StoryStore.addListener(this._handleChange);
    StoryActions.getStory(parseInt(this.props.params.storyid));
  },

  componentWillUnmount() {
    this.storyListener.remove();
  },

  _handleChange() {
    const potentialStory = StoryStore.find(this.props.params.storyid);
    this.setState({ story: potentialStory ? potentialStory : {} });
  },

  _handleDelete() {
    debugger;
    StoryActions.deleteStory(this.state.story.id);
  },

  render() {
    debugger;
    if (SessionStore.currentUser().id === this.state.story.user.id) {
      const story = this.state.story;
      const user = SessionStore.currentUser().username.toUpperCase();
      return (
        <div className="story-container">
          <h2 className="story-user">{user}</h2>
          <h3 className="story-title">{story.title}</h3>
          <pre className="story-body">{story.body}</pre>
          <Button bsStyle="danger" onClick={this._handleDelete}>Delete Story</Button>
          <Link to="/">Back to stories index!</Link>
        </div>
      );
    } else {
        const story = this.state.story;
        const user = SessionStore.currentUser().username.toUpperCase();
        return (
          <div className="story-container">
            <h2 className="story-user">{user}</h2>
            <h3 className="story-title">{story.title}</h3>
            <pre className="story-body">{story.body}</pre>
            <Link to="/">Back to stories index!</Link>
          </div>
      );
    }
  }
});

module.exports = StoryShow;
