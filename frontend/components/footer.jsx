const React = require("react");
const Link = require("react-router").Link;
// const ExternalLink = require("./external_link");

const Footer = React.createClass({
  render: function () {
    return (
      <footer className="footer">
        <section className="footer-wrapper-container">
          <ul className="footer-nav">
            <Link className="logo" to="/">
              Sideline
            </Link>
          </ul>

          <ul className="footer-nav">
            <h5>COMPANY</h5>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li><a>Careers</a></li>
            <li><a>Press</a></li>
          </ul>

          <ul className="footer-nav">
            <h5>CONNECT</h5>

            <a href="https://github.com/tonyhliu/capstone">Github</a>

            <a href="https://www.linkedin.com/in/tonyhoyinliu">LinkedIn</a>

            <a href="http://tumblr.com/">Tumblr</a>
          </ul>
        </section>
      </footer>
    );
  }
});

module.exports = Footer;
