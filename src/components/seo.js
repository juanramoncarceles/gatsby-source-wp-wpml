import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, pageTitle, siteTitle }) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // );
  //console.log("SEO site data: ", site);
  const metaDescription = description; // || site.siteMetadata.description;
  //const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: ``, // site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  meta: [],
};

SEO.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  lang: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
