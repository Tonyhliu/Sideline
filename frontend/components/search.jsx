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
const Modal = require('react-bootstrap').Modal;

const StoryStore = require('../stores/story_store');
const StoryActions = require('../actions/story_actions');
const StoryIndex = require('./story_index');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const FilterParamsStore = require('../stores/filter_params_store');
const FilterActions = require('../actions/filter_actions');

const Search = React.createClass({

  getInitialState() {
    return({ query: '', stories: StoryStore.all(),
            show: false, searchBar: false });
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

  _redirectToSettings() {
    hashHistory.push(`users/${SessionStore.currentUser().id}`);
  },

  _clearQuery() {
    this.setState({ query: "" });
  },

  showSearchBar() {
    this.setState({ searchBar: true });
  },

  hideSearchBar() {
    this.setState({ searchBar: false });
  },

  render() {
    let close = () => this.setState({ show: false });

    const user = SessionStore.currentUser().username.capitalize();
    let ul;
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
                            className="story-link">
                            {story.title}
                      </Link>
                     </li>;
              })
            }
        </ul>;
    }

    // let icon = <i className="material-icons md-36 search search-bar"
    //                         onClick={this.showSearchBar}
    //                         id="search-bar-icon">search</i>;
    // let searchBar = <FormControl type="text"
    //                               placeholder="Search Sideline"
    //                               onInput={this._onInput}
    //                               id="search-bar-bar" />;

    // $('#search-bar-icon').on('click', function(e) {
    //     this.showSearchBar();
    //     $('#search-bar-bar').focus();
    // }.bind(this));
    //
    // $('#search-bar-bar').focusout(function() {
    //   this.state.query = "";
    //   StoryActions.fetchAllStories();
    //   this.hideSearchBar();
    // }.bind(this));

    // { this.state.searchBar ? searchBar : icon }
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
                     <input type="search"
                       placeholder="Search sideline..."
                       onInput={this._onInput}
                       onblur={this._clearQuery}
                      />
                   </FormGroup>

                    {ul}
                </div>

                <div className="whole-modal">
                  <div className="modal-container" style={{height: 200}}>
                    <Modal
                      show={this.state.show}
                      onHide={close}
                      container={this}
                      aria-labelledby="contained-modal-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Sideline</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        This is a demo settings page for Sideline!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>

               <ButtonGroup>
                 <DropdownButton title={user} id="bg-nested-dropdown">
                   <MenuItem onClick={this._redirectTtoNew}>Write your story!</MenuItem>
                   <MenuItem onClick={this._redirectToSettings}>Profile</MenuItem>
                   <MenuItem onClick={() => this.setState({ show: true})}>
                              Settings</MenuItem>
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
