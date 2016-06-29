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

	fieldErrors(field) {
		// const errors = ErrorStore.formErrors(this.formType());
		//
		// if (!errors[field]) { return; }
		//
		// const messages = errors[field].map( (errorMsg, i) => {
		// 	return <li key={ i }>{ errorMsg }</li>;
		// });
		//
		// return <ul>{ messages }</ul>;
	},

	// formType() {
	// 	return this.props.location.pathname.slice(1);
	// },

  render() {
		let navLink;
    // if (this.formType() === "login") {
    //   navLink = <Link to="/signup">sign up instead</Link>;
    // } else {
    //   navLink = <Link to="/login">log in instead</Link>;
    // }

		return (
			<div className="login-form-container">
				<form onSubmit={this._signup} className="login-form-box">
	        Welcome to Sideline!
					<br/>
					Please Sign Up or { navLink }

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
						<input type="submit" value="Sign Up" className="login-button"/>
					</div>
				</form>
			</div>
    );
  }
});

module.exports = SignUpForm;
