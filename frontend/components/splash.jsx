const React = require('react');
const hashHistory = require('react-router').hashHistory;
const App = require('./app');

const Splash = React.createClass({
  _redirectToStories() {
    hashHistory.push("/stories");
  },

  _redirectToSignUp() {
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
          <h2 className="home-page-heading">All the sports news you'll ever need is right here</h2>
          <section className="join-message">
            <p>Share trending stories with other users</p>
            <p>Explore, like, and comment on your favorite stories</p>
            <br/>
            <p>Ready to be a part of Sideline?</p>
          </section>

          <section className="join-button-container">
            <a className="join-button hvr-shutter-out-horizontal"
              onClick={this._redirectToSignUp}>SIGN UP FOR FREE</a>
          </section>
        </div>
      </section>

    </div>
   );}
});

module.exports = Splash;
