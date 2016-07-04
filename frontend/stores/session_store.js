const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

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
