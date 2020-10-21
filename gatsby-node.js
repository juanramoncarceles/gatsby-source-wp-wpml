const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);
const { languages } = require('./src/intl/config');
const { createPostUrl } = require('./src/utils');

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
  {
    templatePath: "./src/templates/blog.js",
    pagePath: "blog",
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
          locale {
            locale
          }
          slug
          # With uri you get something like: "/it/2020/10/21/fourth-post/"
          uri
        }
      }
    }
  `);

  const postTemplate = path.resolve(`./src/templates/post.js`);

  allPosts.forEach((post) => {
    createPage({
      path: createPostUrl(languages, post.locale.locale, post.slug),
      component: slash(postTemplate),
      context: {
        id: post.id,
        lang: post.locale.locale,
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
