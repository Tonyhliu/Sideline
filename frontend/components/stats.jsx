const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;

const Stats = React.createClass({
  getInitialState() {
    return({ nbaStats: [],
              nbaStatsDup: [],
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
    this.setState({ [typeOfStats]: resp,
                      nbaStatsDup: resp});
  },

  _filterChange(e) {
    let filteredList = [];
    let regex = e.target.value.toLowerCase();
    for (var idx = 0; idx < this.state.nbaStatsDup.length; idx ++){
        if (this.state.nbaStatsDup[idx].FirstName.toLowerCase().match(regex)
            || this.state.nbaStatsDup[idx].LastName.toLowerCase().match(regex)
            || (this.state.nbaStatsDup[idx].FirstName.toLowerCase() + " " + this.state.nbaStatsDup[idx].LastName.toLowerCase()).match(regex)) {
              filteredList.push(this.state.nbaStatsDup[idx]);
        }
      }
    this.setState({nbaStats: filteredList});
  },

  _resetSearch(e) {
    e.preventDefault();
    this.setState({nbaStats: this.state.nbaStatsDup, isLoading: false});
  },

  render() {
    let renderNba;
    let isLoading = this.state.isLoading;
    if (this.state.nbaStats.length < 1) {
      if (this.state.nbaStatsDup.length > 0 && isLoading) {
        renderNba = <div>
                      No Matches found. Click <Button className="no-matches-btn"
                                                      onClick={this._resetSearch}>
                                                      here
                                              </Button> to go back!
                    </div>;
      } else {
      renderNba = <div className="fetch-nba-btn">
                    <Button className="fetch-nba-players"
                            onClick={!isLoading ? this._fetchNbaStats : null}
                            disabled={isLoading}>
                      {isLoading ? 'Loading...' : 'Fetch NBA Players'}
                    </Button>
                  </div>;
                }
    } else {
      renderNba = <div>
                    <input className="search-players"
                          type="text"
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
