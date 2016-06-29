const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App  = React.createClass({
  componentDidMount() {
  },

  _signOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  greeting() {
  // if user logged in, display favorites, etc.
  if (SessionStore.isUserLoggedIn()) {
    return(
      <hgroup className="header-group">
        <h2 className="header-name">Welcome, {SessionStore.currentUser().username}!</h2>
        <input className="header-button" type="submit" value="Log out!" onClick={this._signOut} />
      </hgroup>
    );
  } else {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login!</Link>
          <br/>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  // { this.greeting() }
  render: function() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Sideline</h1></Link>
          { this.greeting() }
        </header>
        <br/>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
