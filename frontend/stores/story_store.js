const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const StoryConstants = require('../constants/story_constants');
const StoryStore = new Store(AppDispatcher);

const _stories = {};

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
  _stories = stories; // stories (parameter) an array or object?
}

function resetSingleStory(story) {
  _stories[story.id] = story;
  this.__emitChange();
}

function removeStory(story) {
  delete _stories[story.id];
}

StoryStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case StoryConstants.POSTS_RECEIVED:
      resetAllStories(payload.stories);
      this.__emitChange();
      break;
    case StoryConstants.POST_RECEIVED:
      resetSingleStory(payload.story);
      this.__emitChange();
      break;
    case StoryConstants.POST_REMOVED:
      removeStory(payload.story);
      this.__emitChange();
      break;
  }
};


module.exports = StoryStore;
