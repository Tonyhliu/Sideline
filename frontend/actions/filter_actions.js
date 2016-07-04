const AppDispatcher = require('../dispatcher/dispatcher');
const FilteredConstants = require('../constants/filtered_constants');

const FilterActions = {
  updateTitle(title) {
    AppDispatcher.dispatch({
      actionType: FilteredConstants.UPDATE_STORY_TITLE,
      title: title
    });
  },

  updateBody(body) {
    AppDispatcher.dispatch({
      actionType: FilteredConstants.UPDATE_BODY,
      body: body
    });
  },

  updateUsername(username) {
    AppDispatcher.dispatch({
      actionType: FilteredConstants.UPDATE_USERNAME,
      username: username
    });
  }
};

module.exports = FilterActions;
