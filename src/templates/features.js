import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const Features = ({
  data: {
    wpPage: {
      title,
      seo,
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
          <Img fluid={feature.image.localFile.childImageSharp.fluid} alt="" />
        </div>
      );
    }
    return features;
  };

  return (
  <Layout seoTitle={title} seoDescription={seo.metaDesc}>
    {renderFeatures(featuresData)}
  </Layout>
);}

export const query = graphql`
  query featuresQuery($lang: ID) {
    wpPage(
      slug: { eq: "features" }
      locale: { id: { eq: $lang } }
    ) {
      title
      seo {
        metaDesc
      }
      featuresData {
        feature1 {
          title
          summary
          description
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        feature2 {
          title
          summary
          description
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        feature3 {
          title
          summary
          description
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Features;
