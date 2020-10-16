import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Buy = ({
  data: {
    wpPage: {
      title,
      seo,
      purchaseData
    }
  }
}) => {
  return (
    <Layout seoTitle={title} seoDescription={seo.metaDesc}>
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
      purchaseData {
        commercialPrice
        educationalPrice
        labPrice
      }
    }
  }
`;

export default Buy;
