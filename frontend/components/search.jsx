const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

// React-BS
const Navbar = require('react-bootstrap').Navbar;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
const ButtonGroup = require('react-bootstrap').ButtonGroup;
const DropdownButton = require('react-bootstrap').DropdownButton;
const MenuItem = require('react-bootstrap').MenuItem;

const StoryStore = require('../stores/story_store');
const StoryActions = require('../actions/story_actions');
const StoryIndex = require('./story_index');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const FilterParamsStore = require('../stores/filter_params_store');
const FilterActions = require('../actions/filter_actions');

const Search = React.createClass({
  getInitialState() {
    return({ query: '', stories: StoryStore.all() });
  },

  _storiesChanged() {
    this.setState({ stories: StoryStore.all() });
  },

  componentDidMount() {
    this.storyListener = StoryStore.addListener(this._storiesChanged);
    StoryActions.fetchAllStories();
  },

  componentWillUnmount() {
    this.storyListener.remove();
  },

  _signOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  _onInput(e) {
    this.setState({query: e.target.value});
    StoryActions.fetchAllStories({ query: e.target.value });
  },

  _redirectTtoNew() {
    hashHistory.push("/stories/new");
  },

  _clearQuery() {
    this.state.query = "";
  },

  render() {
    const user = SessionStore.currentUser().username.capitalize();
    let ul = <ul className="dropdown-menu-none" />;
    if (this.state.query.length > 0) {
      ul =
        <ul className="dropdown-menu-list">
          {
            this.state.stories.map(story => {
              let link = `/stories/${story.id}`;
              return <li className="dropdown-menu-item"
                          key={story.id}>
                      <Link to={link}
                            key={story.id}
                            className="story-link"
                            onClick={this._clearQuery}>
                            {story.title}
                      </Link>
                     </li>;
              })
            }
        </ul>;
    }

    return(
        <Navbar className="nav-bar">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/" className="logo"></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>

              <Navbar.Form pullRight>
                <div className="search-container">
                   <FormGroup className="search-bar-container">
                     <FormControl type="text"
                                  placeholder="Search Sideline"
                                  onInput={this._onInput}
                                  className="search-bar"/>
                   </FormGroup>

                    {ul}
                </div>

               <ButtonGroup>
                 <DropdownButton title={user} id="bg-nested-dropdown">
                   <MenuItem onClick={this._redirectTtoNew}>Write your story!</MenuItem>
                   <MenuItem>Profile</MenuItem>
                   <MenuItem>Settings</MenuItem>
                   <MenuItem divider />
                   <MenuItem onClick={this._signOut}>Log Out!</MenuItem>
                 </DropdownButton>
               </ButtonGroup>

             </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
    );
  }
});

module.exports = Search;
