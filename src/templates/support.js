import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const Support = ({
  data: {
    wpPage: { uri, content, title },
  },
}) => {
  return (
    <Layout seoTitle={title}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link to="/support/">English</Link>
      <Link to="/es/support/">Spanish</Link>
      <Link to="/it/support/">Italian</Link>
    </Layout>
  );
};

export const query = graphql`
  query aboutQuery($lang: ID) {
    wpPage(
      slug: { eq: "support" }
      locale: { id: { eq: $lang } }
    ) {
      uri
      content
      title
    }
  }
`;

export default Support;
