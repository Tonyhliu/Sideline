const React = require('react');
const StoryIndexItem = require('./story_index_item');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');

const StoryIndex = React.createClass({
  getInitialState() {
    return({ stories: [] });
  },

  _storyChange() {
    this.setState({ stories: StoryStore.all() });
  },

  componentDidMount() {
    this.storyListener = StoryStore.addListener(this._storyChange);
    StoryActions.fetchAllStories();
  },

  componentWillUnmount() {
    this.storyListener.remove();
  },

  render() {
    return (
      <div>
        <div className="index-header">
          <section className="index-header-header">
            <h1 className="index-header-message"> JOIN THE SIDELINE </h1>
            <h3></h3>
            <h3></h3>
          </section>
        </div>
        <div className="story-index">
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
