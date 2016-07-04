const React = require('react');
const hashHistory = require('react-router').hashHistory;
const StoryActions = require('../actions/story_actions');

// React BS
const form = require('react-bootstrap').form;
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const Button = require('react-bootstrap').Button;
const option = require('react-bootstrap').option;


const CommentForm = React.createClass({
  getInitialState() {
    return({ body: "" });
  },

  _navigateToStoryShow() {
    const storyUrl = "/stories/" + this.props.params.storyid;
    hashHistory.push(storyUrl);
  },

  _handleComment(e) {
    e.preventDefault();
    const comment = Object.assign(
      {},
      this.state,
      { story_id: parseInt(this.props.params.storyid)}
    );

    StoryActions.createComment(comment);
    this._navigateToStoryShow();
  },

  _updateBody(e) {
    return this.setState({ body: e.target.value });
  },

  render() {
    return (
      <form onSubmit={this._handleComment}>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea"
            placeholder="Write a response..."
            rows="10"
            cols="30"
            onChange={this._updateBody}/>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
         <ControlLabel>Select</ControlLabel>
         <FormControl componentClass="select">
           <option value="select">Select</option>
           <option value="Basketball">Basketball</option>
           <option value="Soccer">Soccer</option>
           <option value="Football">Football</option>
           <option value="Baseball">Baseball</option>
           <option value="Volleyball">Volleyball</option>
           <option value="Golf">Golf</option>
           <option value="Hockey">Hockey</option>
           <option value="Other">Other</option>
         </FormControl>
       </FormGroup>

       <Button type="submit">
         Publish
       </Button>
     </form>
    );
  }
});

module.exports = CommentForm;
