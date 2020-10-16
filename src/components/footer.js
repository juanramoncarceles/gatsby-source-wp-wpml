import React from "react";
// import PropTypes from "prop-types";

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
);

export default Footer;
