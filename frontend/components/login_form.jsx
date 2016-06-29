const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return({ username: "", password: "" });
  },

  componentDidMount() {
    // hashHistory.push('/');
    this.sessionListener = SessionStore.addListener(this._redirectIfLoggedIn);
  },

  _redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _login(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

	_redirectToSignup(e) {
		e.preventDefault();
		hashHistory.push("/signup");
	},

  update(property){
    return (e) => this.setState({ [property]: e.target.value });
  },

  render() {
    return(
      <div>
        <form onSubmit={this._login}> Welcome to Sideline!
          <br/>
          <br/>
          <label> Username:
            <input type="text" value={this.state.username} onChange={this.update("username")}></input>
          </label>
          <br/>
            <label> Password:
              <input type="password" value={this.state.password} onChange={this.update("password")}></input>
            </label>
          <br/>
            <input type="submit" value="Log in!"></input>
						<button onClick={this._redirectToSignup}>Sign Up!</button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
