const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');
const StoryApiUtil = require('../util/story_api_util');

const StoryActions = {
  fetchAllStories() {

  },

  createStory(story) {
    StoryApiUtil.createStory(story, StoryActions.receiveSingleStory);
  },

  // createReview(review){
  //   BenchApiUti.createReview(review, BenchActions.receiveSingleStory);
  // },

  receiveAllStories(stories) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECEIVED,
      stories: stories
    });
  },

  receiveSingleStory(story) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_RECEIVED,
      story: story
    });
  },

  removeStory(story) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORY_REMOVED,
      story: story
    });
  }
};

module.exports = StoryActions;
