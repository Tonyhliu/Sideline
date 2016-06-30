const React = require('react');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');

const StoriesIndex = React.createClass({
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
    // add < StoryForm /> in div tag

    return (
      <div className="story-index">
        <ul>
          {
            this.state.stories.map(story => {
              return <StoryIndexItem key={story.id} story={story} />;
            })
          }
        </ul>
      </div>
    );
  }
});
