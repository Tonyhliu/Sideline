const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const FavoriteConstants = require('../constants/favorite_constants');

const SessionStore = new Store(AppDispatcher);
let _currentUser = {};
let _currentUserBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserBeenFetched = true;
}

function _logout(currentUser) {
  _currentUser = {};
  _currentUserBeenFetched = true;
}

const _addFavorite = function(storyId) {
  _currentUser.favorite_stories.push(parseInt(storyId));
};

const _removeFavorite = function(storyId) {
  const storyIdx = _currentUser.favorite_stories.indexOf(parseInt(storyId));
  _currentUser.favorite_stories.splice(storyIdx, 1);
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout(payload.currentUser);
      this.__emitChange();
      break;
    case FavoriteConstants.FAVORITE_RECEIVED:
      _addFavorite(payload.favorite.storyId);
      SessionStore.__emitChange();
      break;
    case FavoriteConstants.FAVORITE_REMOVED:
      _removeFavorite(payload.favorite.storyId);
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign(_currentUser);
};

SessionStore.isUserLoggedIn = function() {
  if (_currentUser.id) {
    return true;
  }
  return false;
};

module.exports = SessionStore;
