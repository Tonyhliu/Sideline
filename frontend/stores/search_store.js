const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const StoryConstants = require('../constants/story_constants');
const FavoriteConstants = require('../constants/favorite_constants');
const SearchStore = new Store(AppDispatcher);

let _searches = {};

SearchStore.all = function() {
  const searches = [];

  Object.keys(_searches).map(key => {
    searches.push(_searches[key]);
  });

  return searches;
};

function resetAllSearches(searches) {
  _searches = {};
  _searches = searches;
}

SearchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case StoryConstants.SEARCHES_RECEIVED:
      resetAllSearches(payload.stories);
      this.__emitChange();
      break;
  }
};


module.exports = SearchStore;
