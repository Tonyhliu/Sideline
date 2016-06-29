const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');

const App  = React.createClass({
  componentDidMount() {
  },

  // greeting() {
  // if user logged in, display favorites, etc.
  //   return (
  //     <nav>
  //       <Link to="/login"> Login! </Link>
  //       <Link to="/signup"> Sign up! </Link>
  //     </nav>
  //   );
  // },

  // { this.greeting() }
  render: function() {
    return (
      <div>
        <header>
          <Link to="/"><h1>Sideline</h1></Link>
        </header>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
