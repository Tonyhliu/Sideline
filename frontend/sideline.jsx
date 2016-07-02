// React
const React = require('react');
const ReactDOM = require('react-dom');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

// Modal
const Modal = require('react-modal');

//Components
const App = require('./components/app');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
const LoginForm = require('./components/login_form');
const Splash = require('./components/splash');
const SignupForm = require('./components/signup_form');
const SessionApiUtil = require('./util/session_api_util');
const StoryIndex = require('./components/story_index');
const StoryIndexItem = require('./components/story_index_item');
const StoryShow = require('./components/story_show');
const StoryForm = require('./components/story_form');
// const StoryEdit = require('./components/story_form');
const CommentForm = require('./components/comment_form');

//Auth
// const SessionStore = require('./stores/session_store');
// const SessionActions = require('./actions/session_actions');

// <Route path="/stories/new "component={StoryForm} onEnter={_ensureLoggedIn}/>

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} onEnter={_redirectIfLoggedIn} />
      <Route path="stories" component={StoryIndex} />
      <Route path="stories/new" component={StoryForm} />
      <Route path="stories/:storyid/edit" component={StoryShow} />
      <Route path="stories/:storyid" component={StoryShow}>
        <Route path="comment" component={CommentForm} />
      </Route>
    </Route>
  </Router>
);

function _redirectIfLoggedIn(nextState, replace) {
  if (SessionStore.isUserLoggedIn()) {
    replace("/stories");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  Modal.setAppElement(document.body);

  ReactDOM.render(
    appRouter,
      document.getElementById('root')
  );
});
