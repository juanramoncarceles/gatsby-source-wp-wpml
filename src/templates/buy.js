import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Buy = ({
  data: {
    wpPage: {
      title,
      seo,
      content,
      purchaseData,
      translated,
    }
  },
  pageContext: {
    lang,
  }
}) => {

  return (
    <Layout seoTitle={title} seoLang={lang} seoDescription={seo.metaDesc} translatedData={translated}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div><span>Professional</span><span>{purchaseData.commercialPrice}</span></div>
      <div><span>Student</span><span>{purchaseData.educationalPrice}</span></div>
      <div><span>School</span><span>{purchaseData.labPrice}</span></div>
    </Layout>
  );
};

export const query = graphql`
  query buyQuery($lang: ID) {
    wpPage(
      slug: { eq: "buy" }
      locale: { id: { eq: $lang } }
    ) {
      title
      seo {
        metaDesc
      }
      content
      purchaseData {
        commercialPrice
        educationalPrice
        labPrice
      }
      translated {
        uri
        locale {
          locale
        }
      }
    }
  }
`;

export default Buy;
