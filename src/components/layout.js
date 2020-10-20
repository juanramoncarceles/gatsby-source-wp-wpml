import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import LanguageSelector from "./language-selector";
import "./layout.css";

const Layout = ({ children, seoTitle, seoDescription, seoLang, translatedData }) => {
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
          }
        }
      }
    }
  `);

  const description = seoDescription ?? settings.generalSettings.description;

  return (
    <>
      <SEO pageTitle={seoTitle} description={description} langCode={seoLang} siteTitle={settings.generalSettings.title} />
      <Header siteTitle={settings.generalSettings.title || `Title`} lang={seoLang} />
      {(translatedData && translatedData.length > 0) ? <LanguageSelector translatedData={translatedData} /> : null}
      <main style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoLang: PropTypes.string,
  translatedData: PropTypes.array,
};

export default Layout;
