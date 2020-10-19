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

// Each pageData should contain the path to the template to create the page and the final page path.
const pagesData = [
  {
    templatePath: "./src/templates/home.js",
    pagePath: "",
  },
  {
    templatePath: "./src/templates/features.js",
    pagePath: "features",
  },
  {
    templatePath: "./src/templates/buy.js",
    pagePath: "buy",
  },
  {
    templatePath: "./src/templates/support.js",
    pagePath: "support",
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


  // Loops all the pages data and languages to create all the final pages.
  // TODO Should be improved to allow certain pages to not be in all the languages.
  ((langs, pagesData) => {
    pagesData.forEach(pageData => {
      langs.forEach(lang => {
        createPage({
          path: `${lang.path}${pageData.pagePath}`,
          component: slash(path.resolve(pageData.templatePath)),
          context: {
            lang: lang.code,
          },
        });
      });
    });
  })(languages, pagesData);

};
