import React from "react";
// import PropTypes from "prop-types";

import styles from "../styles/footer.module.css";

const Footer = ({ siteTitle }) => (
  <footer className={styles.container}>
    <p className={styles["footer-copyright"]}>© {new Date().getFullYear()} {siteTitle}</p>
  </footer>
);

export default Footer;
