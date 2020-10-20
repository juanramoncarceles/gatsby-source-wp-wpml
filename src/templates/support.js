import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Support = ({
  data: {
    wpPage: {
      title,
      seo,
      content,
      translated,
    },
  },
  pageContext: {
    lang,
  }
}) => {
  return (
    <Layout seoTitle={title} seoLang={lang} seoDescription={seo.metaDesc} translatedData={translated}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export const query = graphql`
  query supportQuery($lang: ID) {
    wpPage(
      slug: { eq: "support" }
      locale: { id: { eq: $lang } }
    ) {
      title
      seo {
        metaDesc
      }
      content
      translated {
        uri
        locale {
          locale
        }
      }
    }
  }
`;

export default Support;
