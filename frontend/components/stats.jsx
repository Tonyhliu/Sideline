const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const StatsItem = require('./stats_item');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;

const Stats = React.createClass({
  getInitialState() {
    return({ nbaStats: [],
              nflStats: [] });
  },

  _fetchNbaStats(e) {
    e.preventDefault();
    StatsApiUtil.getNbaStats("nbaStats", this._updateStats);
  },

  _fetchNflStats(e) {
    e.preventDefault();
    StatsApiUtil.getNflStats("nflStats", this._updateStats);
  },

  _updateStats(typeOfStats, resp) {
    this.setState({ [typeOfStats]: resp });
  },

  render() {
    // <h1 onClick={this._fetchNflStats}>
    //   <Button className="fetch-fl-players">
    //     Fetch NFL Players
    //   </Button>
    // </h1>
    // debugger
    return (
      <div>
        <h1 onClick={this._fetchNbaStats}>
          <Button className="fetch-nba-players">
            Fetch NBA Players
          </Button>
        </h1>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Team</th>
              <th>Jersey Number</th>
              <th>Height (in inches)</th>
              <th>Experience (in years)</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nbaStats.map(el => {
              return (<tr key={el.PlayerID}>
                <td><img className="stats-item-pic"
                          src={el.PhotoUrl}>
                </img></td>
                <td>{el.FirstName}</td>
                <td>{el.LastName}</td>
                <td>{el.Team}</td>
                <td>{el.Jersey}</td>
                <td>{el.Height}</td>
                <td>{el.Experience}</td>
                <td>{el.Position}</td>
              </tr>);
            })}
          </tbody>
        </Table>
      </div>
    );
  }
});

module.exports = Stats;
