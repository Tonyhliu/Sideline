const StoryApiUtil = {
  fetchAllStories(data={}, cb) {
    $.ajax({
      url: "/api/stories",
      type: "GET",
      dataType: "json",
      data: data,
      success (resp) {
        cb(resp);
      }
    });
  },

  getStory(id, cb) {
    $.ajax({
      url: `/api/stories/${id}`,
      type: "GET",
      dataType: "json",
      success (resp) {
        cb(resp);
      }
    });
  },

  createStory(data, cb) {
    $.ajax({
      url: "/api/stories",
      type: "POST",
      dataType: "json",
      data: { story: data },
      success (resp) {
        cb(resp);
      }
    });
  },

  createComment(comment, cb) {
    $.ajax({
      url: "/api/comments",
      type: "POST",
      dataType: "json",
      data: { comment },
      success (resp) {
        cb(resp);
      }
    });
  },

  deleteStory(id, cb) {
    $.ajax({
      url: `/api/stories/${id}`,
      type: "DELETE",
      dataType: "json",
      success (resp) {
        cb(resp);
      }
    });
  },

  updateStory(data, id, cb) {
    $.ajax({
      url: `/api/stories/${id}`,
      type: "PATCH",
      dataType: "json",
      data: { story: data },
      success (resp) {
        cb(resp);
      }
    });
  }
};

module.exports = StoryApiUtil;
