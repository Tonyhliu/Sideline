const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return({ username: "", password: "" });
  },

  componentDidMount() {
		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this._redirectIfLoggedIn);
  },

  _redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
			this.props.cb();
    }
  },

  componentWillUnmount() {
		this.errorListener.remove();
    this.sessionListener.remove();
  },

  _signup(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  update(property){
    return (e) => this.setState({ [property]: e.target.value });
  },

	_guest(e) {
		e.preventDefault();
		SessionActions.logIn({username: "Guest", password: "Password"});
	},

	fieldErrors(field) {
		const errors = ErrorStore.formErrors("signup");

		if (!errors[field]) { return; }

		const messages = errors[field].map( (errorMsg, i) => {
			return <li key={ i }>{ errorMsg }</li>;
		});

		return <ul>{ messages }</ul>;
	},

  render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this._signup} className="login-form-box">
	        Welcome to Sideline!
					<br/>
					Please Sign Up.

	        { this.fieldErrors("base") }
					<div className="login-form">
		        <br />
						<label> Username:
		          { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input" />
						</label>

		        <br />
						<label> Password:
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>
						{ this.fieldErrors("password") }

		        <br/>
						<button className="guest-login" onClick={this._guest}>Demo Login</button>
						<input type="submit" value="Sign Up" className="login-button"/>
					</div>
				</form>
			</div>
    );
  }
});

module.exports = SignUpForm;
