const React = require('react');

const Splash = React.createClass({
  // <div className="header-group2">
  // </div>

  // render() {
  //   return(
  //     <div className="jumbotron">
  //       <section className="video-container">
  //         <video src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4"
  //           className="splash-video"
  //           loop preload="auto"
  //           autoPlay muted
  //           loop
  //           overflow="initial"/>
  //       </section>
  //
  //   </div>
  //   );
  // }
 // ------------------------------------------
  //   <div>
  //   <article>
  //     <h1>Video Background Snippet</h1>
  //   </article>
  //   <video autoplay="" loop="" class="fillWidth fadeIn animated" poster="https://s3-us-west-2.amazonaws.com/coverr/poster/Traffic-blurred2.jpg" id="video-background">
  //       <source src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4" type="video/mp4">Your browser does not support the video tag. I suggest you upgrade your browser. >
  //       </source>
  //   </video>
  // </div>

  render () {
    return (
      <section className="video-container">
        <video src="http://res.cloudinary.com/dcbb8bnvk/video/upload/q_47/v1467517622/SIDELINEvid_gvuu8b.mp4"
          className="splash-video"
          loop preload="auto"
          autoPlay muted
          loop
          overflow="initial"/>
        <div className="heropanel__content">
          <h1><a href="/" rel="home">Title</a></h1>
          <p>Subtitle</p>
        </div>
      </section>
   );}
});

module.exports = Splash;
