const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const Button = require('react-bootstrap').Button;

const LoginForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return({ username: "", password: "", loggingIn: false });
  },

  componentDidMount() {
		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this._handleNewSession);
  },

	_handleNewSession() {
		this.props.cb();
		hashHistory.push('/stories');
	},

  componentWillUnmount() {
		this.errorListener.remove();
    this.sessionListener.remove();
  },

  _login(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

	fieldErrors(field) {
		const errors = ErrorStore.formErrors("login");

		if (!errors[field]) { return; }

		const messages = errors[field].map( (errorMsg, i) => {
			return <li className="error-msg-items"
								key={ i }>{ errorMsg }</li>;
		});

		return <ul className="error-msgs">{ messages }</ul>;
	},

	_guest(e) {
		e.preventDefault();
		SessionActions.logIn({username: "Guest", password: "Password"});
	},

  update(property){
    return (e) => this.setState({ [property]: e.target.value });
  },

  render() {
		return (
			<div className="login-form-container">
				<form className="login-form-box">
					<b>Login</b>
					<br/>
					<br/>
	        Welcome to Sideline!
					<br/>
					Please Login.

					<div className="login-form">
		        <br />
						<label> Username:
		          { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input"
								placeholder="Username"/>
						</label>

		        <br />
						<label> Password:
		          { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input"
								placeholder="Password"/>
						</label>

						{ this.fieldErrors("base") }
		        <br />

						<a onClick={this.props.modal}>Don't have an account?</a>

						<Button type="submit"
										value="Log In"
										className="login-button hvr-glow"
										onClick={this._login}>
										Log In
						</Button>

						<Button className="guest-login hvr-glow"
										onClick={this._guest}>
										Demo Login
						</Button>

					</div>
				</form>
			</div>
    );
  }
});

module.exports = LoginForm;
