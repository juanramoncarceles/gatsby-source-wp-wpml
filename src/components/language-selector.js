import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { languages } from "../intl/config";
import styles from "../styles/language-selector.module.css";
import Menu from "./menu";

const LanguageSelector = ({ translatedData }) => {

  return (
    <div className={styles.container}>
      {translatedData.map(page => (
        <Link to={page.uri} key={page.uri} className={styles.item}>
          {languages.find(language => language.code === page.locale.locale).name}
        </Link>
      ))}
    </div>
  );
};

Menu.propTypes = {
  translatedData: PropTypes.array.isRequired,
};

export default LanguageSelector;
