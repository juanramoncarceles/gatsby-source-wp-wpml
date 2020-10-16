import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";

const Header = ({ siteTitle, lang }) => {
  // Since static query cannot use variables in Gatsby (at least for now),
  // I query all the languages and the render them based on a prop.
  const {
    allWordpressMenuLocation: {
      nodes,
    },
  } = useStaticQuery(graphql`
    query {
      allWordpressMenuLocation(filter: {slug: {eq: "primary"}}) {
        nodes {
          menuData {
            items {
              title
              url
              ID
            }
          }
          language
        }
      }
    }    
  `);

  // Returns the menu data for the provided language.
  const menuDataByLanguage = (lang) => nodes.find(n => n.language === lang.substring(0,2)).menuData.items;

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
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        {menuDataByLanguage(lang).map((item) => (
          <Link to={item.url} key={item.ID}>
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  lang: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  lang: `en`
};

export default Header;
