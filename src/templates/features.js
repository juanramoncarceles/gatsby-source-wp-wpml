import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Features = ({
  data: {
    wpPage: {
      featuresData
    }
  }
}) => {
  const renderFeatures = (data) => {
    const features = [];
    for (const feature of Object.values(data)) {
      features.push(
        <div key={feature.title}>
          <h2>{feature.title}</h2>
          <p>{feature.summary}</p>
          <p>{feature.description}</p>
          <img src={feature.image.uri} />
        </div>
      );
    }
    return features;
  };

  return (
  <Layout>
    {renderFeatures(featuresData)}
  </Layout>
);}

export const query = graphql`
  query featuresQuery($lang: ID) {
    wpPage(
      slug: { eq: "features" }
      locale: { id: { eq: $lang } }
    ) {
      featuresData {
        feature1 {
          title
          summary
          description
          image {
            uri
          }
        }
        feature2 {
          title
          summary
          description
          image {
            uri
          }
        }
        feature3 {
          title
          summary
          description
          image {
            uri
          }
        }
      }
    }
  }
`;

export default Features;
