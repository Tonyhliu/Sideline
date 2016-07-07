const React = require('react');
const Link = require('react-router').Link;
const StoryActions = require('../actions/story_actions');
const FavoriteActions = require('../actions/favorite_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const FaBeer = require('react-icons/lib/fa/beer');

const StoryIndexItem = React.createClass({
  editPost(e) {
    e.preventDefault();
    hashHistory.push(`/stories/${this.props.story.id}/edit`);
  },

  deletePost(e) {
    e.preventDefault();
    StoryActions.deleteStory(`${this.props.story.id}`);
  },

  _isLiked() {
    let likeText = "LIKE";
    const currentUser = SessionStore.currentUser();

    if (SessionStore.isUserLoggedIn()) {
      const currentUserFavs = currentUser.favorite_stories;

      if (currentUserFavs.indexOf(this.props.story.id) !== -1) {
        likeText = "UNLIKE";
      }
    }

    return likeText;
  },

  toggleFav() {
    const data = { story_id: this.props.story.id };

    if (this._isLiked() === "LIKE") {
      FavoriteActions.createFavorite(data);
    } else {
      FavoriteActions.deleteFavorite(data);
    }
  },

  cropPic(url) {
    let base = "http://res.cloudinary.com/dcbb8bnvk/image/upload/c_fill,h_300,w_1600/";
    let cropUrl = url.split('/');
    return base + cropUrl[cropUrl.length - 1];
  },

  render() {
    const username = this.props.story.user.username.toUpperCase();
    const picUrl = this.cropPic(this.props.story.picture_url);
    let strippedText = jQuery(this.props.story.body).text();

    let favorite;
    const currentUser = SessionStore.currentUser();

    if (SessionStore.isUserLoggedIn()) {
      const currentUserFavs = currentUser.favorite_stories;

      if (currentUserFavs.indexOf(this.props.story.id) !== -1) {
        favorite = <i className="material-icons md-36 fav"
          onClick={this.toggleFav}>favorite</i>;
      } else {
        favorite = <i className="material-icons md-36
          fav-border" onClick={this.toggleFav}>favorite border</i>;
      }
    }

    let numOfFaves = this.props.story.favorite_users.length;
    return(
      <li className="story-index-item">
        <div className="image-container">
          <h2 className="story-links">
            <Link to={`/stories/${this.props.story.id}`}>
              {this.props.story.title}
            </Link>

          </h2>
          <img className="story-pics"
            src={picUrl} />
        </div>
          <h4 className="story-user">{username}</h4>

          <div className="num-of-faves">
            { numOfFaves} {favorite}
          </div>

          <p className={"paragraphs"}>
            {strippedText.slice(0, 350) + "..."}
          </p>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
