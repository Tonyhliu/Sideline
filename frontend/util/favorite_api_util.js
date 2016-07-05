const FavoriteApiUtil = {
  createFavorite(data, cb) {
    $.ajax({
      url: 'api/favorites',
      type: 'POST',
      data: { favorite: data },
      success(resp) {
        cb(resp);
      }
    });
  },

  deleteFavorite(data, cb) {
    console.log("hello from api util");
    console.log(data);
    $.ajax({
      url: 'api/favorites',
      type: 'DELETE',
      data: { favorite: data },
      success(resp) {
        cb(resp);
      }
    });
  }
};

module.exports = FavoriteApiUtil;
