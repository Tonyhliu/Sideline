const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;
const hashHistory = require('react-router').hashHistory;

var timeout;

const NflStats = React.createClass({
  getInitialState() {
    return({ nflStats: [],
              nflStatsDup: [],
              isLoading: false });
  },

  _fetchNflStats(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    StatsApiUtil.getNflStats(this._updateStats);
  },

  _updateStats(resp) {
    // console.log(resp);
    this.setState({ nflStats: resp,
                      nflStatsDup: resp});
  },

  _beginFilter(e) {
    let etv;
    if (e.target.value) { etv = e.target.value; }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this._filterChange(etv);
    }, 500);
  },

  _filterChange(etv) {
    let filteredList = [];
    let regex = etv.toLowerCase();
    for (var idx = 0; idx < this.state.nflStatsDup.length; idx ++){
        if (this.state.nflStatsDup[idx].FirstName.toLowerCase().match(regex)
            || this.state.nflStatsDup[idx].LastName.toLowerCase().match(regex)
            || (this.state.nflStatsDup[idx].FirstName.toLowerCase() + " " + this.state.nflStatsDup[idx].LastName.toLowerCase()).match(regex)) {
              filteredList.push(this.state.nflStatsDup[idx]);
        }
      }
    this.setState({nflStats: filteredList});
  },

  _resetSearch(e) {
    e.preventDefault();
    this.setState({nflStats: this.state.nflStatsDup});
  },

  _handleBack(e) {
    e.preventDefault();
    hashHistory.push('/stats');
  },

  render() {
    let renderNba;
    let isLoading = this.state.isLoading;
    if (this.state.nflStats.length < 1) {
      if (this.state.nflStatsDup.length > 0 && isLoading) {
        renderNba = <div>
                      No Matches found. Click <Button className="no-matches-btn"
                                                      onClick={this._resetSearch}>
                                                      here
                                              </Button> to go back!
                    </div>;
      } else {
      renderNba = <div className="fetch-nfl-btn">
                    <Button className="fetch-nfl-players"
                            onClick={!isLoading ? this._fetchNflStats : null}
                            disabled={isLoading}>
                      {isLoading ? 'Loading...' : 'Fetch NFL Players'}
                    </Button>
                    <Button className="back-to-stats"
                            onClick={this._handleBack}>
                      Back to other stats
                    </Button>
                  </div>;
                }
    } else {
      renderNba = <div>
                    <input className="search-players"
                          type="text"
                          placeholder="Search player..."
                          onChange={this._beginFilter} />
                    <Table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Team (If active)</th>
                          <th>Jersey Number</th>
                          <th>Height</th>
                          <th>Weight</th>
                          <th>Experience (in years)</th>
                          <th>Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.nflStats.map(el => {
                          return (<tr key={el.PlayerID}>
                            <td><img className="stats-item-pic"
                                      src={el.PhotoUrl}>
                            </img></td>
                            <td>{el.FirstName}</td>
                            <td>{el.LastName}</td>
                            <td>{el.Team}</td>
                            <td>{el.Number}</td>
                            <td>{el.Height}</td>
                            <td>{el.Weight}</td>
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

module.exports = NflStats;
