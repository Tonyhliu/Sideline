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
            user_id: SessionStore.currentUser().id
          });
  },

  componentWillMount() {
    this.pictureUrl = "";
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

    let pic;
    if (this.pictureUrl === "") {
      let rand = Math.ceil((Math.random() * 8));
      switch (rand) {
        case 1:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521114/sfg_g7120s.jpg";
          break;
        case 2:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521106/sfniners_vdlnha.jpg";
          break;
        case 3:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521106/sfniners_vdlnha.jpg";
          break;
        case 4:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521102/gs5_aypfhc.jpg";
          break;
        case 5:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521102/raiders_yyxvce.jpg";
          break;
        case 6:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521100/sjs_eza4mk.jpg";
          break;
        case 7:
          this.pictureUrl = "https://cloudinary.com/console/media_library#/dialog/image/upload/dray_wnuauk.jpg";
          break;
        case 8:
          this.pictureUrl = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521101/sjearth_wt1d6r.jpg";
          break;
      }
    }

    let data = {title: this.state.title,
                body: this.state.body,
                user_id: this.state.user_id,
                picture_url: this.pictureUrl
    };

    StoryActions.createStory(data);
    this._navigateToIndex();
  },

  _handleEdit(e) {
    e.preventDefault();
    const story = StoryStore.find(parseInt(this.props.params.storyid));
    let title;
    let body;

    if (this.state.title === "") {
      title = story.title;
      body = this.state.body;
    } else if (this.state.body === "") {
      title = this.state.title;
      body = story.body;
    } else {
      title = this.state.title;
      body = this.state.body;
    }

    let data = {title: title,
                body: body,
                user_id: this.state.user_id
    };

    StoryActions.editStory(data, story.id);
    hashHistory.push(`/stories/${story.id}`);
  },

  postImage(url) {
    this.pictureUrl = url;
  },

  _upload(e) {
    e.preventDefault();
    const that = this;
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          that.postImage(images[0].url);
        }
    });
  },

  render() {
    if (this.props.params.storyid) {
      const story = StoryStore.find(parseInt(this.props.params.storyid));
      let upload = "Choose Image";
      if (this.pictureUrl !== "") {
        upload = "Uploaded!";
      }

      return (
        <form>

          <FormGroup controlId="formControlsText">
            <ControlLabel></ControlLabel>
            <FormControl type="text"
                        onChange={this._update("title")}
                        defaultValue={story.title}
                        />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel></ControlLabel>
            <FormControl componentClass="textarea"
                        rows="4"
                        cols="50"
                        defaultValue={story.body}
                        onChange={this._update("body")}/>
          </FormGroup>

          <FormGroup controlId="formControlsFile">
            <Button onClick={this._upload}
                    className="upload-button">
                    {upload}
            </Button>
          </FormGroup>

          <Button type="submit" onClick={this._handleEdit}>
            Update
          </Button>

          <Button type="submit"
                  onClick={this._handleCancel}>
            Cancel
          </Button>

        </form>
      );
    } else {
      let upload = "Choose Image";

      if (this.pictureUrl !== "") {
        upload = "Uploaded!";
      }
      return(
        <form onSubmit={this._handleSubmit}>
          <FormGroup controlId="formControlsText">
            <ControlLabel></ControlLabel>
            <FormControl type="text"
                        placeholder="Title"
                        onChange={this._update("title")}
                        required/>
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel></ControlLabel>
            <FormControl componentClass="textarea"
                        rows="4"
                        cols="50"
                        placeholder="Tell your story..."
                        onChange={this._update("body")}
                        required/>
          </FormGroup>

          <FormGroup controlId="formControlsFile">
            <Button onClick={this._upload}
                    className="upload-button">
                    {upload}
            </Button>
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
