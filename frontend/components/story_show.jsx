const React = require('react');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const Button = require('react-bootstrap').Button;
const hashHistory = require('react-router').hashHistory;

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
    StoryActions.deleteStory(this.state.story.id);
    this._redirectToIndex();
  },

  _redirectToIndex() {
    hashHistory.push("/");
  },

  render() {
    let deleteButton = "";
    let editButton = "";

    if (this.state.story.user === undefined) {
      return (<div></div>);
    }

    const story = this.state.story;
    const user = this.state.story.user.username.toUpperCase();

    if (SessionStore.currentUser().id === this.state.story.user.id) {
      deleteButton =  <Button bsStyle="danger"
                                  onClick={this._handleDelete}>
                                  Delete Story
                      </Button>;
      editButton = <Button bsStyle="warning"
                            onClick={this._handleEdit}>
                            Edit Story
                    </Button>;
    }

    return (
      <div className="story-container">
        <h2 className="story-user">{user}</h2>
        <h3 className="story-title">{story.title}</h3>
        <pre className="story-body">{story.body}</pre>
          {editButton}
          {deleteButton}
        <Button bsStyle="info"
                onClick={this._redirectToIndex}>
                Back to stories!
        </Button>
      </div>
    );
  }
});

module.exports = StoryShow;
