const React = require('react');
const hashHistory = require('react-router').hashHistory;
const StoryActions = require('../actions/story_actions');
const SessionStore = require('../stores/session_store');

// React BS
const form = require('react-bootstrap').form;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const Button = require('react-bootstrap').Button;
const option = require('react-bootstrap').option;


const CommentForm = React.createClass({
  getInitialState() {
    return({ body: "", user_id: SessionStore.currentUser().id });
  },

  _navigateToStoryShow() {
    const storyUrl = "/stories/" + this.props.story.id;
    hashHistory.push(storyUrl);
  },

  _handleComment(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      this.state,
      { story_id: parseInt(this.props.story.id) }
    );

    if (!this.state.body == false) {
      StoryActions.createComment(comment);
      this.setState({ body: "" , user_id: SessionStore.currentUser().id });
      this._navigateToStoryShow();
    }
  },

  _updateBody(e) {
    return this.setState({ body: e.target.value });
  },

  render() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <form onSubmit={this._handleComment}>
          <FormGroup controlId="formControlsTextarea"
                      className="">
            <FormControl componentClass="textarea"
              placeholder="Write a response..."
              value={this.state.body}
              rows="5"
              cols="30"
              onChange={this._updateBody}/>
          </FormGroup>

         <Button type="submit" className="button hvr-hang">
           Publish
         </Button>
       </form>
      );
    } else {
      return (<div></div>);
    }
  }
});

module.exports = CommentForm;
