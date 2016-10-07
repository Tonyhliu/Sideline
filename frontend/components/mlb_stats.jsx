const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;
const hashHistory = require('react-router').hashHistory;

var timeout;

const MlbStats = React.createClass({
  getInitialState() {
    return({ mlbStats: [],
              mlbStatsDup: [],
              isLoading: false });
  },

  _fetchMlbStats(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    StatsApiUtil.getMlbStats(this._updateStats);
  },

  _updateStats(resp) {
    // console.log(resp);
    this.setState({ mlbStats: resp,
                      mlbStatsDup: resp});
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
    for (var idx = 0; idx < this.state.mlbStatsDup.length; idx ++){
        if (this.state.mlbStatsDup[idx].FirstName.toLowerCase().match(regex)
            || this.state.mlbStatsDup[idx].LastName.toLowerCase().match(regex)
            || (this.state.mlbStatsDup[idx].FirstName.toLowerCase() + " " + this.state.mlbStatsDup[idx].LastName.toLowerCase()).match(regex)) {
              filteredList.push(this.state.mlbStatsDup[idx]);
        }
      }
    this.setState({mlbStats: filteredList});
  },

  _resetSearch(e) {
    e.preventDefault();
    this.setState({mlbStats: this.state.mlbStatsDup});
  },

  _handleBack(e) {
    e.preventDefault();
    hashHistory.push('/stats');
  },

  render() {
    let renderMlb;
    let isLoading = this.state.isLoading;
    if (this.state.mlbStats.length < 1) {
      if (this.state.mlbStatsDup.length > 0 && isLoading) {
        renderMlb = <div className="no-matches">
                      No Matches found. Click <a href="#"
                                                  className="no-matches-btn"
                                                  onClick={this._resetSearch}>
                                                      here
                                              </a> to go back!
                    </div>;
      } else {
      renderMlb = <div className="fetch-mlb-container">
                    <div className="fetch-mlb-btns">
                      <Button className="fetch-mlb-players"
                              onClick={!isLoading ? this._fetchMlbStats : null}
                              disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Fetch MLB Players'}
                      </Button>
                      <Button className="back-to-stats"
                              onClick={this._handleBack}>
                        Back to other stats
                      </Button>
                    </div>
                    <img className="mlb-stats"
                        src="http://res.cloudinary.com/dcbb8bnvk/image/upload/v1475796972/mlb_sx6hll.png">
                    </img>
                  </div>;
                }
    } else {
      renderMlb = <div>
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
                          <th>Team</th>
                          <th>Jersey Number</th>
                          <th>Height</th>
                          <th>Weight</th>
                          <th>Bat Hand</th>
                          <th>Throw Hand</th>
                          <th>Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.mlbStats.map(el => {
                          return (<tr key={el.PlayerID}>
                            <td><img className="stats-item-pic"
                                      src={el.PhotoUrl}>
                            </img></td>
                            <td>{el.FirstName}</td>
                            <td>{el.LastName}</td>
                            <td>{el.Team}</td>
                            <td>{el.Jersey}</td>
                            <td>{el.Height}</td>
                            <td>{el.Weight}</td>
                            <td>{el.BatHand}</td>
                            <td>{el.ThrowHand}</td>
                            <td>{el.Position}</td>
                          </tr>);
                        })}
                      </tbody>
                    </Table>
                  </div>;
    }

    return (
      <div className="result-stats-container">
        {renderMlb}
      </div>
    );
  }
});

module.exports = MlbStats;
