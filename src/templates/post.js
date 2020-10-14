import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Post({ pageContext }) {
  // TODO: Use data instead ?
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  );
}
