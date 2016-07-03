const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const App = require('./app');

const SignUpForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return({ username: "", password: "" });
  },

  componentDidMount() {
		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this._handleNewUser);
  },

	_handleNewUser() {
		this.props.cb();
		hashHistory.push('/stories');
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

	_redirectToLoginModal() {
		App.onModalClose();
		App._handleClick.bind(this, true);
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
								className="login-input"
								placeholder="Username"/>
						</label>

		        <br />
						<label> Password:
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input"
								placeholder="Password"/>
						</label>
						{ this.fieldErrors("password") }

		        <br/>

						<a onClick={this.props.modal}>
								Already have an account?</a>

						<button className="guest-login"
										onClick={this._guest}>
										Demo Login
						</button>

						<input type="submit"
									value="Sign Up"
									className="login-button"/>
					</div>
				</form>
			</div>
    );
  }
});

module.exports = SignUpForm;
