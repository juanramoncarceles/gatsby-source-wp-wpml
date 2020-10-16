import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, langCode, meta, pageTitle, siteTitle }) => {
  // This could be used as a fallback in case no props are provided.
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

  const metaDescription = description;

  // With this approach even if the string has the country code it is ignored.
  // Another option would be replace '_' for '-' since the codes come from WPML
  // like 'es_ES' and in HTML they should be 'es-ES'.
  const lang = langCode.substring(0,2);

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
  langCode: `en`,
  description: ``,
  meta: [],
};

SEO.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  langCode: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
