import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";

const Menu = ({ lang }) => {

  // Since staticQuery cannot use variables in Gatsby (at least for now),
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

  /**
   * @param {menuData[]} menuDataArr
   * @param {string} lang 
   * @returns An object with the menu data for the provided language code.
   */
  const menuDataByLanguage = (menuDataArr, lang) => menuDataArr.find(n => n.language === lang.substring(0,2)).menuData.items;

  return (
    <div>
      {menuDataByLanguage(nodes, lang).map((item) => (
        <Link to={item.url} key={item.ID}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

Menu.propTypes = {
  lang: PropTypes.string,
};

Menu.defaultProps = {
  lang: `en`,
};

export default Menu;
