const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');

// Forms
const LoginForm = require('./login_form');
const SignUpForm = require('./signup_form');

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
      <hgroup className="header-group">
        <h2 className="header-name">
            Welcome, {SessionStore.currentUser().username.capitalize()}!
        </h2>

        <input className="header-button"
                type="submit"
                value="Log out!"
                onClick={this._signOut} />
      </hgroup>
      );
    } else {
      return (
        <div>
          <button className="login-button" id="sign-in-button"
            onClick={this._handleClick.bind(this, true)}>
            Sign In
          </button>

          <button className="login-button" id="sign-up-button"
            onClick={this._handleClick.bind(this, false)}>
            Sign Up
          </button>
        </div>
      );
    }
  },

  // header footer & modal

  render: function() {
    const component = (this.state.signIn) ? <LoginForm cb={this.onModalClose}/> : <SignUpForm cb={this.onModalClose}/>;

    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Sideline</h1></Link>
          { this.greeting() }

        </header>
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

          {this.props.children}
      </div>
    );
  }

});

module.exports = App;
