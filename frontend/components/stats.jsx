const React = require('react');
const StatsApiUtil = require('../util/stats_api_util');
const StatsItem = require('./stats_item');

const Stats = React.createClass({
  getInitialState() {
    return({ stats: [] });
  },

  _fetchStats(e) {
    e.preventDefault();
    StatsApiUtil.getNbaStats(this._updateStats);
  },

  _updateStats(resp) {
    this.setState({ stats: resp });
  },

  render() {
    return (
      <div>
        <h1 onClick={this._fetchStats}>Fetch NBA Players</h1>
        <ul>
          {this.state.stats.map(el => {
            return <StatsItem key={el.PlayerId}
                              player={el} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Stats;
