const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const Button = require('react-bootstrap').Button;
const Table = require('react-bootstrap').Table;
const hashHistory = require('react-router').hashHistory;

var timeout;

const NbaStats = React.createClass({
  getInitialState() {
    return({ nbaStats: [],
              nbaStatsDup: [],
              isLoading: false,
              sortDir: null
          });
  },

  _fetchNbaStats(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    StatsApiUtil.getNbaStats(this._updateStats);
  },

  _updateStats(resp) {
    this.setState({ nbaStats: resp,
                      nbaStatsDup: resp});
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
    console.log("filter change ran");
    let filteredList = [];
    let regex = etv.toLowerCase();
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
    this.setState({nbaStats: this.state.nbaStatsDup});
  },

  _handleBack(e) {
    e.preventDefault();
    hashHistory.push('/stats');
  },

  _sortRowsByFname() {
    let sortDir = this.state.sortDir; // null to begin with
    if (sortDir !== null) {
      sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }

    let data = this.state.nbaStats.slice();
    data.sort((a, b) => {
      // console.log('hit sortRowsBy SORT method');
      // debugger
      // sortDir has reference, but not sortBy...

      let sortVal = 0;
      if (a.FirstName > b.FirstName) {
        sortVal = 1;
      }
      if (a.FirstName < b.FirstName) {
        sortVal = -1;
      }

      if (sortDir === 'DESC') {
        sortVal = sortVal * -1;
      }

      return sortVal;
    });

    this.setState({ sortDir: sortDir,
                    nbaStats: data});
  },

  render() {
    let sortDirArrow = '';
    let renderNba;
    let isLoading = this.state.isLoading;

    if (this.state.sortDir !== null) {
      sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
    }

    if (this.state.nbaStats.length < 1) {
      if (this.state.nbaStatsDup.length > 0 && isLoading) {
        renderNba = <div className="no-matches">
                      No Matches found. Click <a href="#" className="no-matches-btn"
                                                      onClick={this._resetSearch}>
                                                      here
                                              </a> to go back!
                    </div>;
      } else {
      renderNba = <div className="fetch-nba-container">
                    <div className="fetch-nba-btns">
                      <Button className="fetch-nba-players"
                              onClick={!isLoading ? this._fetchNbaStats : null}
                              disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Fetch NBA Players'}
                      </Button>
                      <Button className="back-to-stats"
                              onClick={this._handleBack}>
                        Back to other stats
                      </Button>
                    </div>
                      <img className="nba-stats"
                          src="http://res.cloudinary.com/dcbb8bnvk/image/upload/v1475796972/nba_rzbnqb.png">
                      </img>
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
                          <th onClick={this._sortRowsByFname}
                              className='first-name-row'>First Name {sortDirArrow}</th>
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

module.exports = NbaStats;
