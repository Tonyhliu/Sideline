const React = require('react');
const Button = require('react-bootstrap').Button;
const hashHistory = require('react-router').hashHistory;

const Stats = React.createClass({
  _redirectToNbaStats() {
    hashHistory.push('/stats/nba');
  },

  _redirectToNflStats() {
    hashHistory.push('/stats/nfl');
  },

  _redirectToMlbStats() {
    hashHistory.push('/stats/mlb');
  },

  render() {
    return (
      <div className="stats-container">
        <p className="stats-paragraph">
          Welcome to the stats page, where you can fetch stats about professional athletes based on the sport. Click one of the buttons below to get started!
        </p>

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

        <img className="stats-pic"
          src="http://res.cloudinary.com/dcbb8bnvk/image/upload/v1475794979/sports_gkjlu2.png">
        </img>

      </div>
  );}
});

module.exports = Stats;
