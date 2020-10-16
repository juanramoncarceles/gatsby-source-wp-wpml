import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import SEO from "./seo";
import "./layout.css";

const Layout = ({ children, seoTitle, seoDescription, seoLang }) => {
  const {
    allWp: {
      nodes: [settings],
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allWp {
        nodes {
          generalSettings {
            title
            description
            language
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO pageTitle={seoTitle} description={seoDescription} langCode={seoLang} siteTitle={settings.generalSettings.title} />
      <Header siteTitle={settings.generalSettings.title || `Title`} lang={seoLang} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoLang: PropTypes.string,
};

export default Layout;
