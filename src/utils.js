/**
 * Creates the url for a post following this pattern: /&lt;lang&gt;/blog/&lt;post-slug&gt;/
 * @param {Object[]} languagesArr Array of language data objects with 'code' and 'path' properties.
 * @param {string} locale String representing a locale in the WPML way: en_US, es_ES, it_IT... corresponds to the 'code' above.
 * @param {string} slug The slug for the post.
 */
exports.createPostUrl = (languagesArr, locale, slug) => `${languagesArr.find(l => l.code === locale).path}blog/${slug}`;
