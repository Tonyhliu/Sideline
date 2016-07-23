const React = require('react');
const hashHistory = require('react-router').hashHistory;
const form = require('react-bootstrap').form;
const FormGroup = require('react-bootstrap').FormGroup;
const Button = require('react-bootstrap').Button;

const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const Profile = React.createClass({
  getInitialState() {
    return({ avatarUrl: SessionStore.currentUser().avatar_url });
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
    let data = { username: user.username,
                password: user.password,
                avatar_url: this.state.avatarUrl,
                user_id: user.id };

    SessionActions.update(data);
    hashHistory.push("/stories");
  },

  render() {
    let upload = "Upload a picture!";
    let defaultPic = "http://res.cloudinary.com/dcbb8bnvk/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/profilepic_cty3ak.png";
    if (this.state.avatarUrl !== defaultPic) {
      upload = "Uploaded";
    }

    return (
      <div>
        <div className="profile-page">
          <div className="profile-container">
            <h1 className="profile-header"> Upload a profile picture!</h1>
            <h3>
              <img src={SessionStore.currentUser().avatar_url}
                  className="upload-user-pic" />
            </h3>
            <form className="profile-form">
              <FormGroup controlId="formControlsFile">
                <Button onClick={this._upload}
                        className="upload-button hvr-grow">
                        {upload}
                </Button>
              </FormGroup>

              <div className="update-pic">
              <Button type="submit"
                      className="submit-button hvr-grow"
                      onClick={this._handleEdit}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );}
});

module.exports = Profile;
