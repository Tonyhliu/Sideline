const React = require('react');
const ReactQuill = require('react-quill');
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
            user_id: SessionStore.currentUser().id, pictureUrl: ""
          });
  },

  componentWillMount() {
    if (this.props.params.storyid) {
      this.storyListener = StoryStore.addListener(this._receiveStory);
      StoryActions.getStory(this.props.params.storyid);
    }
  },

  componentWillUnmount() {
    if (this.storyListener) {
      this.storyListener.remove();
    }
  },

  _receiveStory() {
    const story = StoryStore.find(this.props.params.storyid);
    this.setState({ title: story.title, body: story.body,
                    user_id: story.user_id, pictureUrl: story.picture_url });
  },

  _handleCancel(event) {
    event.preventDefault();
    this._navigateToIndex();
  },

  _navigateToIndex() {
    hashHistory.push("/");
  },

  _handleSubmit(e) {
    e.preventDefault();

    let pic;
    if (this.state.pictureUrl === "") {
      let rand = Math.ceil((Math.random() * 8));
      switch (rand) {
        case 1:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521114/sfg_g7120s.jpg";
          break;
        case 2:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521106/sfniners_vdlnha.jpg";
          break;
        case 3:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521106/sfniners_vdlnha.jpg";
          break;
        case 4:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521102/gs5_aypfhc.jpg";
          break;
        case 5:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521102/raiders_yyxvce.jpg";
          break;
        case 6:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521100/sjs_eza4mk.jpg";
          break;
        case 7:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467520392/dray_wnuauk.jpg";
          break;
        case 8:
          pic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/v1467521101/sjearth_wt1d6r.jpg";
          break;
      }
    } else {
      pic = this.state.pictureUrl;
    }

    let data = {title: this.state.title,
                user_id: this.state.user_id,
                body: this.state.body,
                picture_url: pic
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
                user_id: this.state.user_id,
                picture_url: this.state.pictureUrl
    };

    StoryActions.editStory(data, story.id);
    hashHistory.push(`/stories/${story.id}`);
  },

  postImage(url) {
    console.log(url);
    this.setState({ pictureUrl: url});
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
      const story = this.state;

      let upload = "Choose Image!";
      if (this.state.pictureUrl && this.state.pictureUrl !== "") {
        upload = "Image uploaded!";
      }

      return (
        <div className="form-container">
          <form>
            <FormGroup controlId="formControlsText">
              <ControlLabel></ControlLabel>
              <FormControl type="text"
                          onChange={(e) => this.setState({ title: e.target.value})}
                          value={story.title}
                          />
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel></ControlLabel>
              <ReactQuill componentClass="textarea"
                          theme="snow"
                          rows="10"
                          cols="10"
                          value={story.body}
                          onChange={(e) => this.setState({ body: e})}
                          required></ReactQuill>
            </FormGroup>

            <FormGroup controlId="formControlsFile">
              <Button onClick={this._upload}
                      className="upload-button">
                      {upload}
              </Button>
            </FormGroup>

            <div className="story-form-buttons">
              <Button type="submit" onClick={this._handleEdit}>
                Update
              </Button>

              <Button type="submit"
                      onClick={this._handleCancel}>
                Cancel
              </Button>
            </div>

          </form>
        </div>
      );
    } else {

      let upload = "Choose Image";
      if (this.state.pictureUrl) {
        upload = "Picture uploaded!";
      }

      return(
        <div className="form-container">
          <form onSubmit={this._handleSubmit}
                className="story-form">
            <FormGroup controlId="formControlsText">
              <ControlLabel></ControlLabel>
              <FormControl type="text"
                          className="story-title"
                          placeholder="Title"
                          onChange={(e) => this.setState({ title: e.target.value})}
                          required />
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel></ControlLabel>
              <ReactQuill componentClass="textarea"
                          theme="snow"
                          rows="10"
                          cols="10"
                          placeholder="Tell your story..."
                          value={this.state.body}
                          defaultValue="Tell your story..."
                          onChange={(e) => this.setState({ body: e})}
                          required
                          styles={false}>
              </ReactQuill>
            </FormGroup>

            <FormGroup controlId="formControlsFile">
              <Button onClick={this._upload}
                      className="upload-button">
                      {upload}
              </Button>
            </FormGroup>

            <div className="story-form-buttons">
              <Button type="submit">
                Submit
              </Button>

              <Button type="submit"
                      onClick={this._handleCancel}>
                Cancel
              </Button>
            </div>

          </form>
      </div>
      );
    }
  }
});

module.exports = StoryForm;
