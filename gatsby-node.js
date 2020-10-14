const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

const languages = [
  {
    path: "/",
    code: "en_US",
  },
  {
    path: "/es/",
    code: "es_ES",
  },
  {
    path: "/it/",
    code: "it_IT",
  },
];

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
      path: `/blog${post.uri}`,
      component: slash(postTemplate),
      context: {
        id: post.id,
        title: post.title,
        content: post.content,
      },
    });
  });

  const aboutTemplate = path.resolve("./src/templates/about.js");

  languages.forEach((lang) => {
    createPage({
      path: `${lang.path}about`,
      component: slash(aboutTemplate),
      context: {
        lang: lang.code,
      },
    });
  });

  const featuresTemplate = path.resolve("./src/templates/features.js");

  languages.forEach((lang) => {
    createPage({
      path: `${lang.path}features`,
      component: slash(featuresTemplate),
      context: {
        lang: lang.code,
      },
    });
  });
};
