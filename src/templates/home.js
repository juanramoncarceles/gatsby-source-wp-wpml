import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";

const Home = ({
  data: {
    wpPage: { content }
  },
  pageContext: {
    lang,
  }
}) => {
  return (
    <Layout seoLang={lang}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query homeQuery($lang: ID) {
    wpPage(
      slug: { eq: "home" }
      locale: { id: { eq: $lang } }
    ) {
      uri
      content
      title
    }
  }
`;

export default Home;
