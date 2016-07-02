const React = require('react');
const StoryActions = require('../actions/story_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const StoryStore = require('../stores/story_store');

// React BS
const form = require('react-bootstrap').form;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const HelpBlock = require('react-bootstrap').HelpBlock;
const Button = require('react-bootstrap').Button;

const StoryForm = React.createClass({
  getInitialState() {
    return({ title: "", body: "",
            user_id: SessionStore.currentUser().id,
            edit: false });
  },

  _handleCancel(event) {
    event.preventDefault();
    this._navigateToIndex();
  },

  _navigateToIndex() {
    hashHistory.push("/");
  },

  _update(prop) {
    return (e) => this.setState({ [prop]: e.target.value});
  },

  _handleSubmit(e) {
    e.preventDefault();

    let data = {title: this.state.title,
                body: this.state.body,
                user_id: this.state.user_id
    };

    StoryActions.createStory(data);
    this.setState({ title: "",
                    body: "",
                    user_id: SessionStore.currentUser().id });
    this._navigateToIndex();
  },

  _handleEdit(e) {
    e.preventDefault();
    const storyid = parseInt(this.props.params.storyid);

    let data = {title: this.state.title,
                body: this.state.body,
                user_id: this.state.user_id
    };

    StoryActions.editStory(data, storyid);
    hashHistory.push(`/stories/${storyid}`);
  },

  render() {
    if (this.props.params.storyid) {
      const story = StoryStore.find(parseInt(this.props.params.storyid));
      return (
        <form onSubmit={this._handleEdit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel></ControlLabel>
            <FormControl type="text"
                        onChange={this._update("title")}
                        defaultValue={story.title}/>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel></ControlLabel>
            <FormControl componentClass="textarea"
                        rows="4"
                        cols="50"
                        defaultValue={story.body}
                        onChange={this._update("body")}/>
          </FormGroup>

          <FormGroup controlId="formControlsFile"
                      onClick={this._upload}>
            <ControlLabel>File</ControlLabel>
            <FormControl type="file" />
            <HelpBlock>Upload Image</HelpBlock>
          </FormGroup>

          <Button type="submit">
            Update
          </Button>

          <Button type="submit"
                  onClick={this._handleCancel}>
            Cancel
          </Button>

        </form>
      );
    } else {
      return(
        <form onSubmit={this._handleSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel></ControlLabel>
            <FormControl type="text"
                        placeholder="Title"
                        onChange={this._update("title")} />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel></ControlLabel>
            <FormControl componentClass="textarea"
                        rows="4"
                        cols="50"
                        placeholder="Tell your story..."
                        onChange={this._update("body")}/>
          </FormGroup>

          <FormGroup controlId="formControlsFile">
            <ControlLabel>File</ControlLabel>
            <FormControl type="file" />
            <HelpBlock>Upload Image</HelpBlock>
          </FormGroup>

          <Button type="submit">
            Submit
          </Button>

          <Button type="submit"
                  onClick={this._handleCancel}>
            Cancel
          </Button>

        </form>
      );
    }
  }
});

module.exports = StoryForm;
