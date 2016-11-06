const React = require('react');
const StoryIndexItem = require('./story_index_item');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const StoryIndex = React.createClass({
  getInitialState() {
    return({ stories: [] });
  },

  _storyChange() {
    this.setState({ stories: StoryStore.all() });
  },

  componentDidMount() {
    this.storyListener = StoryStore.addListener(this._storyChange);
    this.sessionListener = SessionStore.addListener(this._storyChange);
    StoryActions.fetchAllStories();
  },

  componentWillUnmount() {
    this.storyListener.remove();
    this.sessionListener.remove();
  },

  _redirectToNew() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/stories/new");
    } else {
      $('Button.login-button').click();
    }
  },

  _redirectToStats() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('stats');
    } else {
      $('Button.login-button').click();
    }
  },

  render() {
    return (
      <div>
        <div className="index-header">
          <section className="index-header-header">
            <h1 className="index-header-message"> JOIN THE SIDELINE </h1>
            <h3 className='header-msg'>Sideline is a platform for users to share and catch up on sports</h3>
            <h3 onClick={this._redirectToStats}
                className='header-stats-msg hvr-bounce-in'>Check LIVE Stats HERE</h3>
          </section>
        </div>
        <div className="story-index">
          <div className="add-story"
                onClick={this._redirectToNew}>
            <img id="create-article-button" src="http://res.cloudinary.com/dzpkgj9f0/image/upload/v1468814176/add_circle_outline_grey_192x192_mkdddo.png" />
            <span id='add-story-text'>Write your story...</span>
          </div>
          <ul className="index-stories">
            {
              this.state.stories.map(story => {
                return <StoryIndexItem key={story.id}
                                      story={story} />;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = StoryIndex;
