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

  _signup(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  update(property){
    return (e) => this.setState({ [property]: e.target.value });
  },

  render() {
    return(
      <div>
        <form onSubmit={this._signup}> Welcome to Sideline!
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
            <input type="submit" value="Sign up!"></input>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
