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
      <div>
        <div className="stats-container">
          <p className="stats-paragraph">
            Pick a sport below to fetch LIVE stats!
          </p>

          <div className="stats-btns">
            <Button className="fetch-nba-btn"
                  onClick={this._redirectToNbaStats}>
                    NBA Stats
            </Button>
            <Button className="fetch-nfl-btn"
                  onClick={this._redirectToNflStats}>
                    NFL Stats
            </Button>
            <Button className="fetch-mlb-btn"
                  onClick={this._redirectToMlbStats}>
                    MLB Stats
            </Button>
          </div>

        </div>

        <div>
          <img className="stats-pic"
            src="http://res.cloudinary.com/dcbb8bnvk/image/upload/v1475794979/sports_gkjlu2.png">
          </img>
        </div>

    </div>
  );}
});

module.exports = Stats;
