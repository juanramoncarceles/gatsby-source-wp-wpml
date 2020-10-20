import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "../styles/language-selector.module.css";
import Menu from "./menu";

const LanguageSelector = ({ translatedData }) => (
  <div className={styles.container}>
    {translatedData.map(page => (
      <Link to={page.uri} key={page.uri} className={styles.item}>{page.locale.locale}</Link>
    ))}
  </div>
);

Menu.propTypes = {
  translatedData: PropTypes.array.isRequired,
};

export default LanguageSelector;
