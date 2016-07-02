const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');

// React BS
const ButtonGroup = require('react-bootstrap').ButtonGroup;
const Button = require('react-bootstrap').Button;
const DropdownButton = require('react-bootstrap').DropdownButton;
const MenuItem = require('react-bootstrap').MenuItem;

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

  _redirectToStoryForm() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/stories/new");
    } else {
      alert("Please login or sign up first!");
    }
  },

  greeting() {
  if (SessionStore.isUserLoggedIn()) {
    const user = SessionStore.currentUser().username.capitalize();
    return(
      <ButtonGroup>

        <Button className="create-story"
                onClick={this._redirectToStoryForm}>
                Write your story!
        </Button>


        <DropdownButton title={user} id="bg-nested-dropdown">
          <MenuItem>Hello1</MenuItem>
          <MenuItem>Hello2</MenuItem>
          <MenuItem divider />
          <MenuItem onClick={this._signOut}>Log Out!</MenuItem>
        </DropdownButton>


      </ButtonGroup>
      );
    } else {
      return (
        <ButtonGroup>

          <Button className="login-button"
                      onClick={this._redirectToStoryForm}>
                      Write your story!
          </Button>

          <Button className="login-button"
              onClick={this._handleClick.bind(this, true)}>
              Sign In
          </Button>

          <Button className="login-button"
            onClick={this._handleClick.bind(this, false)}>
            Sign Up
          </Button>


        </ButtonGroup>
      );
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
