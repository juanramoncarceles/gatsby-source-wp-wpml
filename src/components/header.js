import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { languages } from "../intl/config";
import Menu from "./menu";

const Header = ({ siteTitle, lang }) => {

  const currentLang = languages.find(language => language.code === lang);

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to={currentLang.path}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu lang={lang} />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Header;
