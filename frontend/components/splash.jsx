const React = require('react');

const Splash = React.createClass({
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
            TESTING TITLE
          </div>
      </section>
   );}
});

module.exports = Splash;
