const React = require('react');
const Link = require('react-router').Link;
const StoryActions = require('../actions/story_actions');
const FavoriteActions = require('../actions/favorite_actions');
const StoryStore = require('../stores/story_store');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

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
      console.log(currentUser);
      const currentUserFavs = currentUser.favorite_stories;

      console.log(currentUserFavs);
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
      FavoriteActions.removeFavorite(data);
    }
  },

  render() {
    const username = this.props.story.user.username.toUpperCase();

    // img src = each individual story's URL
    // if no image, upload default image (random)


    return(
      <li className="story-index-item">
          <img src={this.props.story.picture_url}/>
          <h4 className="story-user">{username}</h4>
          <h2 className="story-links">
            <Link to={`/stories/${this.props.story.id}`}>
              {this.props.story.title}
            </Link>
          <button className="toggle-fave"
                  onClick={this.toggleFav}>
                  {this._isLiked()}
          </button>
          </h2>
          <p className={"paragraphs"}>
            {this.props.story.body.slice(0, 300) + "..."}
          </p>
      </li>
    );
  }
});

module.exports = StoryIndexItem;
