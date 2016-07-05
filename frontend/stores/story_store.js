const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const StoryConstants = require('../constants/story_constants');
const FavoriteConstants = require('../constants/favorite_constants');
const StoryStore = new Store(AppDispatcher);

let _stories = {};

StoryStore.all = function() {
  const stories = [];

  Object.keys(_stories).map(key => {
    stories.push(_stories[key]);
  });

  return stories;
};

StoryStore.find = function(id) {
  return _stories[id];
};

function resetAllStories(stories) {
  _stories = {};
  _stories = stories;
}

function resetSingleStory(story) {
  _stories[story.id] = story;
}

function removeStory(story) {
  delete _stories[story.id];
}

function addFavorite(storyId, userId) {
  _stories[storyId].favorite_users.push(parseInt(userId));
}

function removeFavorite(storyId, userId) {
  console.log(storyId, userId);
  const userIdx = _stories[storyId].favorite_users.indexOf(parseInt(userId));
  _stories[storyId].favorite_users.splice(userIdx, 1);
}

StoryStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case StoryConstants.STORIES_RECEIVED:
      resetAllStories(payload.stories);
      this.__emitChange();
      break;
    case StoryConstants.STORY_RECEIVED:
      resetSingleStory(payload.story);
      this.__emitChange();
      break;
    case StoryConstants.STORY_REMOVED:
      removeStory(payload.story);
      this.__emitChange();
      break;
    case FavoriteConstants.FAVORITE_RECEIVED:
      addFavorite(payload.favorite.storyId, payload.favorite.userId);
      this.__emitChange();
      break;
    case FavoriteConstants.FAVORITE_REMOVED:
      console.log("HELLO FROM STORY STORE");
      console.log(payload.favorite);
      removeFavorite(payload.favorite.storyId, payload.favorite.userId);
      this.__emitChange();
      break;
  }
};


module.exports = StoryStore;
