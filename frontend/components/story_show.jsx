const React = require('react');
const ReactQuill = require('react-quill');
const StoryActions = require('../actions/story_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;
const Button = require('react-bootstrap').Button;
const hashHistory = require('react-router').hashHistory;
const CommentForm = require('./comment_form');


const StoryShow = React.createClass({
  getInitialState() {
    const potentialStory = StoryStore.find(this.props.params.storyid);
    return ({ story: potentialStory ? potentialStory : {} });
  },

  componentDidMount() {
    this.storyListener = StoryStore.addListener(this._handleChange);
    StoryActions.getStory(parseInt(this.props.params.storyid));
  },

  componentWillReceiveProps(newProps) {
    StoryActions.getStory(parseInt(newProps.params.storyid));
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

  _handleEdit() {
    hashHistory.push(`/stories/${this.props.params.storyid}/edit`);
  },

  _redirectToIndex() {
    hashHistory.push("/stories");
  },

  showCommentForm() {
    hashHistory.push(`/stories/${this.state.story.id}/comment`);
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
      deleteButton = <i className="material-icons md-36 trash"
        onClick={this._handleDelete}>delete forever</i>;

      editButton =  <i className="material-icons md-36 edit"
        onClick={this._handleEdit}>mode edit</i>;
    }

    const comments = this.state.story.comments || [];

    if (comments.length > 0) {
      return (
        <div className="story-container">
          <div className="story-page-container">
            <h2 className="story-user">{user}</h2>
              <div className="picture-container">
                <img src={story.picture_url}
                      className="story-picture"/>
              </div>
            <h3 className="story-show-title">{story.title}</h3>

            <div className="story-body">
              <div className="story-paragraph"
                  dangerouslySetInnerHTML={{__html: story.body}}>
              </div>

              <div className="comments-container">
                <div className="comments-buttons-container">
                  {editButton}
                  {deleteButton}
                  <Button bsStyle="info"
                          onClick={this._redirectToIndex}
                          className="index-button">
                          Back to Stories!
                  </Button>
                </div>

                <h2 className="comments-pre">Comments</h2>
                {comments.map(comment => {
                  return <pre className="comments-pre"
                    key={comment.id}>
                    { comment.user.username } : {comment.body}
                  </pre>;
                  })
                  }

                <CommentForm story={this.state.story}/>
              </div>
            </div>
          </div>
        </div>

      );
    } else {
        return (
          <div className="story-container">
            <div className="story-page-container">
              <h2 className="story-user">{user}</h2>
              <div className="picture-container">
                <img src={story.picture_url}
                    className="story-picture" />
              </div>
              <h3 className="story-show-title">{story.title}</h3>

              <div className="story-body">
                <div className="story-paragraph"
                    dangerouslySetInnerHTML={{__html: story.body}}>
                </div>

                <div className="comments-container">
                  <div className="comments-buttons-container">
                    {editButton}
                    {deleteButton}
                    <Button bsStyle="info"
                            onClick={this._redirectToIndex}
                            className="index-button">
                            Back to stories!
                    </Button>
                  </div>

                  <br/>
                  <h1 className="comments-pre">No comments yet!</h1>
                  <CommentForm story={this.state.story} />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
});

module.exports = StoryShow;
