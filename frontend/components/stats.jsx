const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const StatsItem = require('./stats_item');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;

const Stats = React.createClass({
  getInitialState() {
    return({ nbaStats: [],
              isLoading: false });
  },

  _fetchNbaStats(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    StatsApiUtil.getNbaStats("nbaStats", this._updateStats);
  },

  _fetchNflStats(e) {
    e.preventDefault();
    StatsApiUtil.getNflStats("nflStats", this._updateStats);
  },

  _updateStats(typeOfStats, resp) {
    this.setState({ [typeOfStats]: resp});
  },

  _filterChange(e) {
    // e.preventDefault();
    // nbaStats LOST in data
    let filteredList = [];
    // debugger
    let regex = e.target.value.toLowerCase();
    for (var idx = 0; idx < this.state.nbaStats.length; idx ++){
      if (this.state.nbaStats[idx].FirstName.toLowerCase().match(regex)
          || this.state.nbaStats[idx].LastName.toLowerCase().match(regex)
          || (this.state.nbaStats[idx].FirstName.toLowerCase() + " " + this.state.nbaStats[idx].LastName.toLowerCase()).match(regex)) {
            filteredList.push(this.state.nbaStats[idx]);
      }
    }
    this.setState({nbaStats: filteredList});
  },

  render() {
    // <h1 onClick={this._fetchNflStats}>
    //   <Button className="fetch-fl-players">
    //     Fetch NFL Players
    //   </Button>
    // </h1>
    let renderNba;
    let isLoading = this.state.isLoading;
    if (this.state.nbaStats.length < 1) {
      renderNba = <div className="fetch-nba-btn">
                    <Button className="fetch-nba-players"
                            onClick={!isLoading ? this._fetchNbaStats : null}
                            disabled={isLoading}>
                      {isLoading ? 'Loading...' : 'Fetch NBA Players'}
                    </Button>
                  </div>;
    } else {
      renderNba = <div>
                    <input className="search-players"
                          type="search"
                          placeholder="Search player..."
                          onChange={this._filterChange} />
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
                  </div>;
    }



    return (
      <div className="result-stats-container">
        {renderNba}
      </div>
    );
  }
});

module.exports = Stats;
