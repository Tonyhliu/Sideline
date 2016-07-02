const AppDispatcher = require('../dispatcher/dispatcher');
const StoryConstants = require('../constants/story_constants');
const StoryApiUtil = require('../util/story_api_util');

const StoryActions = {
  fetchAllStories() {
    StoryApiUtil.fetchAllStories(this.receiveAllStories);
  },

  getStory(id) {
    StoryApiUtil.getStory(id, this.receiveSingleStory);
  },

  createStory(story) {
    StoryApiUtil.createStory(story, StoryActions.receiveSingleStory);
  },

  deleteStory(id) {
    StoryApiUtil.deleteStory(id, this.removeStory);
  },

  editStory(data, storyid) {
    StoryApiUtil.updateStory(data, storyid, this.receiveSingleStory);
  },

  // createComment(comment){
  //   CommentApiUti.createComment(comment, CommentActions.receiveSingleStory);
  // },

  receiveAllStories(stories) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORIES_RECEIVED,
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
