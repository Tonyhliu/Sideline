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
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
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


// <Route path="/stories/new "component={StoryForm} onEnter={_ensureLoggedIn}/>
// <Route path="comments" component={CommentForm} onEnter={_ensureLoggedIn}/>
const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="login"component={LoginForm} />
      <Route path="signup"component={SignupForm} />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn) {
    replace("/login");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  ReactDOM.render(
    appRouter,
      document.getElementById('root')
  );
});

window.SessionApiUtil = SessionApiUtil;
