const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');
// const buttonGroupInstance = require('react-bootstrap')
// const DropdownButton = require('react-bootstrap').DropdownButton

// Forms
const LoginForm = require('./login_form');
const SignUpForm = require('./signup_form');
// const StoryForm = require('./story_form');

// Modal
const Modal = require('react-modal');
const ModalStyle = require('../constants/modal_style');

String.prototype.capitalize = function() {
  return this.slice(0, 1).toUpperCase() + this.slice(1);
};

const App  = React.createClass({
  getInitialState() {
    return({
      modalOpen: false,
      signIn: false
     });
  },

  _handleClick(bool) {
      this.setState({
      modalOpen: true,
      signIn: bool
     });
  },

  onModalClose() {
    this.setState({ modalOpen: false });
    ModalStyle.content.opacity = 0;
    ErrorStore.resetErrors();
  },

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  },

  _signOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  greeting() {

  if (SessionStore.isUserLoggedIn()) {
    return(
      <ul className="header-group">
        <li><button className="create-story"
                    onClick={this._redirectToStoryForm}>
                    Write your story!
            </button>
        </li>

        <li>
          <h2 className="header-name">
            Welcome, {SessionStore.currentUser().username.capitalize()}!
          </h2>
        </li>

        <li>
          <input className="header-button"
                type="submit"
                value="Log out!"
                onClick={this._signOut} />
        </li>
    </ul>
      );
    } else {
      return (
        <ul className="header-group">
          <li><button className="login-button"
                      onClick={this._redirectToStoryForm}>
                      Write your story!
              </button>
          </li>

          <li>
            <button className="login-button"
              onClick={this._handleClick.bind(this, true)}>
              Sign In
            </button>
          </li>

          <li>
            <button className="login-button"
              onClick={this._handleClick.bind(this, false)}>
              Sign Up
            </button>
          </li>
      </ul>
      );
    }
  },

  _redirectToStoryForm() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/stories/new");
    } else {
      alert("Please login or sign up first!");
    }
  },

  // header footer & modal

  render: function() {
    const component = (this.state.signIn) ? <LoginForm cb={this.onModalClose}/> : <SignUpForm cb={this.onModalClose}/>;

    return (
      <div>
        <header>
          <nav>
            <Link to="/" className="header-link"><h1>Sideline</h1></Link>
              { this.greeting() }
          </nav>
        </header>

        <div>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>

            <button className="modal-close"
                    onClick={this.onModalClose}>
                    Close</button>
            {component}
          </Modal>
        </div>

          {this.props.children}
      </div>
    );
  }

});

module.exports = App;
