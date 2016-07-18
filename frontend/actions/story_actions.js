const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');
const StoryApiUtil = require('../util/story_api_util');

const StoryActions = {
  fetchAllStories(data={}) {
    StoryApiUtil.fetchAllStories(data, this.receiveAllStories);
  },

  getStory(id) {
    StoryApiUtil.getStory(id, this.receiveSingleStory);
  },

  createStory(story, redirectCb) {
    StoryApiUtil.createStory(story, StoryActions.receiveSingleStory, redirectCb);
  },

  deleteStory(id) {
    StoryApiUtil.deleteStory(id, this.removeStory);
  },

  editStory(data, storyid) {
    StoryApiUtil.updateStory(data, storyid, this.receiveSingleStory);
  },

  createComment(comment){
    StoryApiUtil.createComment(comment, this.receiveSingleStory);
  },

  receiveAllStories(stories) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORIES_RECEIVED,
      stories: stories
    });
  },

  receiveSingleStory(story, redirectCb) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECEIVED,
      story: story
    });

    if (typeof redirectCb === 'function') {
      redirectCb(story);
    }
  },

  removeStory(story) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_REMOVED,
      story: story
    });
  }
};

module.exports = StoryActions;
