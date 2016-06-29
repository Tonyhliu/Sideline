const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

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
    }
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
		const errors = ErrorStore.formErrors(this.formType());

		if (!errors[field]) { return; }

		const messages = errors[field].map( (errorMsg, i) => {
			return <li key={ i }>{ errorMsg }</li>;
		});

		return <ul>{ messages }</ul>;
	},

	formType() {
		return this.props.location.pathname.slice(1);
	},

	_redirectToSignup(e) {
		e.preventDefault();
		hashHistory.push("/signup");
	},

  update(property){
    return (e) => this.setState({ [property]: e.target.value });
  },


	// <div>
	// 	<form onSubmit={this._login}> Welcome to Sideline!
	// 		<br/>
	// 		<br/>
	// 		<label> Username:
	// 			<input type="text" value={this.state.username} onChange={this.update("username")}></input>
	// 		</label>
	// 		<br/>
	// 			<label> Password:
	// 				<input type="password" value={this.state.password} onChange={this.update("password")}></input>
	// 			</label>
	// 		<br/>
	// 			<input type="submit" value="Log in!"></input>
	// 			<button onClick={this._redirectToSignup}>Sign Up!</button>
	// 	</form>
	// </div>
  render() {
		let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<div className="login-form-container">
				<form onSubmit={this._login} className="login-form-box">
	        Welcome to Sideline!
					<br/>
					Please { this.formType() } or { navLink }

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
		          { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>

		        <br />
						<input type="submit" value="Log In" />
					</div>
				</form>
			</div>
    );
  }
});

module.exports = LoginForm;
