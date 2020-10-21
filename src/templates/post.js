import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/layout";

const Post = ({
  data: {
    wpPost: {
      title,
      content,
      categories,
      tags,
      author,
      date
    }
  },
  pageContext: {
    lang,
  },
}) => {
  // TODO Currently translations don't have 'categories' neither 'tags' due
  // to WPML, in the meantime use the ones from the engish version.
  return (
    <Layout seoTitle={title} seoLang={lang}>
      <p>Categories: {categories.nodes.map(category => category.name)}</p>
      <p>Tags: {tags.nodes.map(tag => tag.name)}</p>
      <p>Author: {author.node.name}</p>
      <p>Date: {date}</p>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export const query = graphql`
  query postQuery($id: String!, $lang: String!) {
    wpPost(id: {eq: $id}) {
      title
      content
      categories {
        nodes {
          name
          uri
        }
      }
      tags {
        nodes {
          name
          uri
        }
      }
      author {
        node {
          name
        }
      }
      date(formatString: "MMMM Do, YYYY", locale: $lang)
    }
  }
`;

export default Post;
