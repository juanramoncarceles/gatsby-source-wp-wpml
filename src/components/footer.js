import React from "react";
// import PropTypes from "prop-types";

import styles from "../styles/footer.module.css";

const Footer = ({ siteTitle }) => (
  <footer className={styles.container}>
    <p className={styles["footer-copyright"]}>© {new Date().getFullYear()} {siteTitle}</p>
  </footer>
);

export default Footer;

/*

Contents of the footer may include:

Links to this pages:
- Legal
- About us
- The Team
- Subscribe to Newsletter

Also this content of the brand:
  Asuni logo and "RhinoToolKit is an Asuni brand"

Also maybe links to social media...

All this could be done in here or using ACF with an options page in WP.

*/
