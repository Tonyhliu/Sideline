const React = require('react');
const StoryActions = require('../actions/story_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');

const StoryForm = React.createClass({
  getInitialState() {
    return({ title: "", body: "", user_id: SessionStore.currentUser().id });
  },

  _handleCancel(event) {
    event.preventDefault();
    this._navigateToIndex();
  },

  _navigateToIndex() {
    hashHistory.push("/");
  },

  _update(prop) {
    return (e) => this.setState({ [prop]: e.target.value});
  },

  _handleSubmit(e) {
    e.preventDefault();
    StoryActions.createStory(this.state);
    this._navigateToIndex();
  },

  render() {
    return (
      <div className="new-story-container">
        <div className="new-story-form">
          <h3 className="new-story-header">Write a story!</h3>
            <form onSubmit={this._handleSubmit}>
              <label className="story-field">Title: </label>
              <input type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this._update("title")}
                    className="story-field" />

                <label className="story-field">Body: </label>
              <textarea
                    rows="4"
                    cols="50"
                    value={this.state.body}
                    placeholder="Write here..."
                    onChange={this._update("body")} />

              <div className="button-holder">
                <input type="submit" value="Tell your story!"
                      className="new-story-button" />
              </div>
            </form>

            <div className="button-holder">
              <button onClick={this._handleCancel}
                    className="new-story-button">Cancel</button>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = StoryForm;
