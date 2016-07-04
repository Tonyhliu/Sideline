const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const FilteredConstants = require('../constants/filtered_constants');

let _params = { title: "", body: "", username: "" };
const FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return Object.assign({}, _params);
};

function setTitle(title) {
  _params.title = title;
}

function setBody(body) {
  _params.body = body;
}

function setUsername(username) {
  _params.username = username;
}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilteredConstants.UPDATE_STORY_TITLE:
      setTitle(payload.title);
      this.__emitChange();
      break;
    case FilteredConstants.UPDATE_BODY:
      setBody(payload.body);
      this.__emitChange();
      break;
    case FilteredConstants.UPDATE_USERNAME:
      setUsername(payload.username);
      this.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
