const React = require('react');
const SessionActions = require('../actions/session_actions');

const Splash = React.createClass({
  _signOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  // if there's a current user, display sign out 
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this._signOut}>SIGN OUT!</button>
      </div>
    );
  }

});

module.exports = Splash;
