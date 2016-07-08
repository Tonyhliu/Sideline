const React = require('react');
const hashHistory = require('react-router').hashHistory;

const Splash = React.createClass({
  _redirectToStories() {
    hashHistory.push("/stories");
  },

  render () {
    return (
      <section className="video-container">
        <video src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4"
          className="splash-video"
          loop preload="auto"
          autoPlay muted
          loop
          overflow="initial"/>

          <div className="hero-message">
            <h1 className="hero-header">CATCH UP ON THE LATEST SPORTS NEWS</h1>
            <h3 className="hero-subheader"
                onClick={this._redirectToStories}>Explore Stories Now!</h3>
          </div>
      </section>
   );}
});

module.exports = Splash;
