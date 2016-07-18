const React = require('react');

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="about-page">
          <h1 className="about-header"> Join the Sideline club! </h1>
          <p className="about-paragraph"> Sideline allows users to read and comment on the current and rumored news, across all sports.
                                          Inspired by Medium, the objective is for users to share their favorite stories and search for trending ones!
                                          Users can also upload a profile picture and story pictures for other users to view and "like".
                                          Currently, Sideline is a work-in-progress with new features still in the development process. for more information,
                                          visit Sideline's GitHub repository!</p>
      </div>
    </div>
  );}
});

module.exports = About;
