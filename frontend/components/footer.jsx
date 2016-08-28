const React = require("react");
const Link = require("react-router").Link;

const Footer = React.createClass({
  render: function () {
    return (
      <footer className="footer">
        <section className="footer-wrapper-container">
          <ul className="footer-nav">
            <Link className="footer-logo" to="/">
              <h5 className="footer-headers">SIDELINE</h5>
            </Link>
          </ul>

          <ul className="footer-nav">
            <h5 className="footer-headers">COMPANY</h5>

            <li><a>About</a></li>
            <li><a>Careers</a></li>
            <li><a>Press</a></li>
          </ul>

          <ul className="footer-nav">
            <h5 className="footer-headers">CONNECT</h5>

            <a href="http://tonyhliu.us">Portfolio</a>

            <a href="https://github.com/tonyhliu/capstone">Github</a>

            <a href="https://www.linkedin.com/in/tonyhoyinliu">LinkedIn</a>

          </ul>
        </section>
      </footer>
    );
  }
});

module.exports = Footer;
