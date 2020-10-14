import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ({
  data: {
    wpPage: { uri, content, title },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link to="/about/">English</Link>
      <Link to="/es/about/">Spanish</Link>
      <Link to="/it/about/">Italian</Link>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($lang: ID) {
    wpPage(
      slug: { eq: "about" }
      locale: { id: { eq: $lang } }
    ) {
      uri
      content
      title
    }
  }
`;

export default About;
