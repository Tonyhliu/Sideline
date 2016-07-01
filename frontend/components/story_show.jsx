const React = require('react');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;

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

  render() {
    let owner = false;
    if (SessionStore.currentUser().id === this.state.story.user_id) {
      owner = true;
      // delete hidden / shows
    }
    const story = this.state.story;
    const user = SessionStore.currentUser().username;
    return (
      <div className="story-container">
        <h2>{user}</h2>
        <h3 className="story-title">{story.title}</h3>
        <pre className="story-body">{story.body}</pre>
        <Link to="/">Back to stories index!</Link>
      </div>
    );
  }
});

module.exports = StoryShow;
