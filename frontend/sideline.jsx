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
const Splash = require('./components/splash');
const SessionApiUtil = require('./util/session_api_util');
const StoryIndex = require('./components/story_index');
const StoryShow = require('./components/story_show');
const StoryForm = require('./components/story_form');
const CommentForm = require('./components/comment_form');
const About = require('./components/about');
const Profile = require('./components/profile');
const Stats = require('./components/stats');
const NbaStats = require('./components/nba_stats');
const NflStats = require('./components/nfl_stats');
// const MlbStats = require('./components/mlb_stats');

const appRouter = (
  <Router onUpdate={window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} onEnter={_redirectIfLoggedIn} />
      <Route path="stories" component={StoryIndex} />
      <Route path="stories/new" component={StoryForm} />
      <Route path="stories/:storyid/edit" component={StoryForm} />
      <Route path="stories/:storyid" component={StoryShow}>
        <Route path="comment" component={CommentForm} />
      </Route>
      <Route path="about" component={About} />
      <Route path="users/:id" component={Profile} />
      <Route path="stats" component={Stats} />
      <Route path="stats/nba" component={NbaStats} />
      <Route path="stats/nfl" component={NflStats} />
    </Route>
  </Router>
);
// <Route path="stats/mlb" component={MlbStats} />

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

  $(document).mouseup(function (e)
    {
      const container = $(".search-bar-container");

      if (!container.is(e.target)
          && container.has(e.target).length === 0)
          $('.search-bar-container input').val("");
    });

  ReactDOM.render(
    appRouter,
      document.getElementById('root')
  );
});
