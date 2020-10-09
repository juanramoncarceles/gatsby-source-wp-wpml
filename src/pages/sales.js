import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Sales = ({ data: { wpPage } }) => {
  const { commercialPrice, educationalPrice, labPrice } = wpPage.purchaseData;

  return (
    <Layout>
      <SEO title="Sales" />
      <h1>{wpPage.title}</h1>
      <p>
        Commercial price: <span>{commercialPrice}</span>
      </p>
      <p>
        Educational price: <span>{educationalPrice}</span>
      </p>
      <p>
        LAB price: <span>{labPrice}</span>
      </p>
    </Layout>
  );
};

export const query = graphql`
  {
    wpPage(id: { eq: "cG9zdDoxMA==" }) {
      title
      purchaseData {
        commercialPrice
        educationalPrice
        labPrice
      }
      uri
    }
  }
`;

export default Sales;
