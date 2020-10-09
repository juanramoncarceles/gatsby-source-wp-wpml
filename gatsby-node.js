const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query content for WordPress posts.
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
          title
          content
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/templates/post.js`);

  allPosts.forEach((post) => {
    createPage({
      // Will be the url for the page.
      path: `/blog${post.uri}`, // post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
        title: post.title,
        content: post.content,
      },
    });
  });
};
