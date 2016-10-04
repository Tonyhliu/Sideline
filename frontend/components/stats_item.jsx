const React = require('react');
const Button = require('react-bootstrap').Button;

const StatsItem = React.createClass({
  render() {
    // debugger
    return(
      <li className="stats-item">
        <img className="stats-item-pic"
              src={this.props.player.PhotoUrl}></img>
        <h3 className="stats-name-team">
          {this.props.player.FirstName} {this.props.player.LastName} : {this.props.player.Team}
        </h3>
        <span className="stats-item-info">
          Experience: {this.props.player.Experience}
          <br />
          Height in inches: {this.props.player.Height}
          <br />
          Jersey Number: {this.props.player.Jersey}
          <br />
          Position: {this.props.player.Position}
        </span>
      </li>
    );
  }
});

module.exports = StatsItem;
