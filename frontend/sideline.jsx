// React
const React = require('react');
const ReactDOM = require('react-dom');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//Components
const App = require('./components/app');
// const StoryForm = require('./components/story_form');
// const StoryShow = require('./components/story_show');
const LoginForm = require('./components/login_form');
const Splash = require('./components/splash');
const SignupForm = require('./components/signup_form');
const SessionApiUtil = require('./util/session_api_util');

// const newUser = require('./components/users/new');
// const newSession = require('./components/sessions/new');

//Auth
// const SessionStore = require('./stores/session_store');
// const SessionActions = require('./actions/session_actions');


// <Route path="/stories/new"component={StoryForm} />
// pass props to splash so can greet user?
// <IndexRoute component={Splash} />
const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="login"component={LoginForm} />
      <Route path="signup"component={SignupForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    appRouter,
      document.getElementById('root')
  );
});

window.SessionApiUtil = SessionApiUtil;
