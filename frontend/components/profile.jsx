const React = require('react');
const hashHistory = require('react-router').hashHistory;
const form = require('react-bootstrap').form;
const FormGroup = require('react-bootstrap').FormGroup;
const Button = require('react-bootstrap').Button;

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const Profile = React.createClass({
  getInitialState() {
    return({ avatarUrl: SessionStore.currentUser().avatarUrl });
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

  postImage(url) {
    let base = "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/";
    let cropUrl = url.split('/');
    let profilePic = base + cropUrl[cropUrl.length - 1];

    this.setState({ avatarUrl: profilePic});
  },

  _handleEdit(e) {
    e.preventDefault();
    const user = SessionStore.currentUser();
    console.log(user);
    let data = { username: user.username,
                password: user.password,
                avatar_url: this.state.avatarUrl,
                user_id: user.id };

    SessionActions.update(data);
    hashHistory.push("/stories");
  },

  render() {
    let upload = "Upload Picture!";
    if (this.state.avatarUrl !== "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/profilepic_cty3ak.png") {
      upload = "Uploaded!";
    }

    return (
      <div>
        <div className="profile-page">
          <h1 className="profile-header"> Upload a picture of yourself!</h1>
          <form>
            <FormGroup controlId="formControlsFile">
              <Button onClick={this._upload}
                      className="upload-button">
                      {upload}
              </Button>
            </FormGroup>

            <div className="update-pic">
              <Button type="submit" onClick={this._handleEdit}>
                Update
              </Button>
            </div>
          </form>
      </div>
    </div>
  );}
});

module.exports = Profile;
