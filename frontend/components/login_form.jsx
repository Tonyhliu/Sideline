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
    return({ username: "",
						password: "",
						isLoading: false,
					 	demoLoading: false});
  },

  componentDidMount() {
		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this._handleNewSession);
  },

	_handleNewSession() {
		this.props.cb();
		// window.scrollTo(0,0);
	},

  componentWillUnmount() {
		this.errorListener.remove();
    this.sessionListener.remove();
  },

  _login(e) {
    e.preventDefault();
		if (SessionActions.logIn(this.state)) {
			this.setState({isLoading: true});
			// window.scrollTo(0,0);
		}
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
		this.setState({demoLoading: true});
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
	        Welcome to <span className="sideline-title">SIDELINE!</span>
					<br/>
					Please Login.

					<div className="login-form">
		        <br />
						<label className="form-username"> Username
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input"
								placeholder="Username"/>
						</label>

		        <br />
						<label className="form-username"> Password
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input"
								placeholder="Password"/>
						</label>

						<br/>

						{ this.fieldErrors("base") }

						<a onClick={this.props.modal}>Don't have an account?</a>

						<Button type="submit"
										value="Log In"
										className="login-button hvr-glow"
										onClick={this._login}
										disabled={this.state.isLoading}>
										{this.state.isLoading ? 'Logging in...' : 'Log In'}
						</Button>

						<Button className="guest-login hvr-glow"
										onClick={this._guest}
										disabled={this.state.demoLoading}>
										{this.state.demoLoading ? 'Logging in...' : 'Demo Login'}
						</Button>

					</div>
				</form>
			</div>
    );
  }
});

module.exports = LoginForm;
