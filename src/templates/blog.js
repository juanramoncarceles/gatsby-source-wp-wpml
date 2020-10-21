import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { languages } from "../intl/config";
import { createPostUrl } from "../utils";

const Blog = ({
  data: {
    allWpPost: {
      nodes: posts
    }
  },
}) => {

  return (
    <Layout>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link
              to={createPostUrl(languages, post.locale.locale, post.slug)}
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query allPostsQuery($lang: String!){
    allWpPost(filter: {locale: {locale: {eq: $lang}}}) {
      nodes {
        id
        title
        slug
        excerpt
        locale {
          locale
        }
        # Currently not working in translations.
        featuredImage {
          node {
            uri
          }
        }
      }
    }
  }
`;

export default Blog;
