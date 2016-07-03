const React = require('react');

const Splash = React.createClass({
  // <div className="header-group2">
  // </div>

  render() {
    return(
      <div className="jumbotron">
        <section className="video-container">
          <video src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4"
            className="splash-video"
            loop preload="auto"
            autoPlay muted
            loop
            overflow="initial"/>
        </section>

    </div>
    );
  }
});
// <section className="mask">
//   <section className="mask-message">
//     <h1 className="sport">TALK SPORTS</h1>
//     <h3 className="sport">TALK SPORTS</h3>
//   </section>
// </section>

module.exports = Splash;
