const React = require('react');
const Button = require('react-bootstrap').Button;
const hashHistory = require('react-router').hashHistory;

const Stats = React.createClass({
  _redirectToNbaStats() {
    hashHistory.push('/stats/nba');
  },

  _redirectToNflStats() {

  },

  _redirectToMlbStats() {

  },

  render() {
    return (
      <div className="stats-btns">
        <Button onClick={this._redirectToNbaStats}
              className="fetch-nba-btn">
                NBA Stats
        </Button>
        <Button
              className="fetch-nfl-btn"
              onClick={this._redirectToNflStats}>
                NFL Stats
        </Button>
        <Button to={'/stats/mlb'}
              className="fetch-mlb-btn"
              onClick={this._redirectToMlbStats}>
                MLB Stats
        </Button>
      </div>
  );}
});

module.exports = Stats;
