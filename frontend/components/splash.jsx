const React = require('react');
const hashHistory = require('react-router').hashHistory;
const App = require('./app');
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;

const Splash = React.createClass({
  getInitialState() {
    return({ show: false });
  },

  showModal() {
    this.setState({ show: true });
  },

  hideModal() {
    this.setState({ show: false });
  },

  _redirectToStories() {
    hashHistory.push("/stories");
  },

  render () {
    return (
      <div>

      <section className="video-container">
        <video src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4"
          className="splash-video"
          loop preload="auto"
          autoPlay muted
          loop
          overflow="initial"/>

          <div className="hero-message">
            <h1 className="hero-header">CATCH UP ON THE LATEST SPORTS NEWS</h1>
            <h3 className="hero-subheader hvr-ripple-in"
                onClick={this._redirectToStories}>Explore Stories Now!</h3>
          </div>
      </section>

      <section className="home-page-join">
        <div className="home-page-container">
          <h2 className="home-page-heading">All the latest sports news you'll ever need is right <i>here</i></h2>
          <section className="join-message">
            <p>Share trending stories with other users</p>
            <p>Explore, like, and comment on your favorite stories</p>
            <br/>
            <p>Ready to be a part of Sideline?</p>
          </section>

          <section className="join-button-container">
            <a className="join-button hvr-shutter-out-horizontal"
              onClick={this.showModal}>LEARN MORE</a>
          </section>

          <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal">

          <Modal.Body>
            <h3>What is Sideline?</h3>
            <p className="modal-p">
              Join the Sideline Club!
              Sideline enables users to read and comment on the current and rumored news, across all sports.
                                              Users can also decide to fetch LIVE data fetched across the different sports.
                                              Inspired by Medium, the objective is for users to share their favorite stories and search for trending ones!
                                              Users can also upload a profile picture and story pictures for other users to view and "like".
                                              Currently, Sideline is a work-in-progress with new features still in the development process. for more information,
                                              visit Sideline's GitHub repository!
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      </section>

    </div>
   );}
});

module.exports = Splash;
