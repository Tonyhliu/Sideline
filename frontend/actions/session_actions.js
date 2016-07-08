const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signUp(formData){
    SessionApiUtil.signup(
    formData,
    SessionActions.receiveCurrentUser,
    ErrorActions.setErrors);
  },

  logIn(formData){
    SessionApiUtil.logIn(
    formData,
    SessionActions.receiveCurrentUser,
    ErrorActions.setErrors);
  },

  update(data) {
    SessionApiUtil.update(
      data,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logOut() {
    SessionApiUtil.logout(SessionActions.removeCurrentUser);
  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
    actionType: SessionConstants.LOGIN,
    currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
    actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/");
  }

};

module.exports = SessionActions;
