const htmlmin = require('html-minifier');
const dateFns = require('date-fns');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('refsAlpha', function (collection) {
    return collection.getFilteredByGlob('src/references/*.md').sort(function (a, b) {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    });
  });

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
        // Handle remote file
        return imgPath;
      } else {
        return `./src/${imgPath}`;
      }
    },
  });

  eleventyConfig.addPassthroughCopy('./src/js');

  eleventyConfig.setEjsOptions({
    rmWhitespace: true,
    context: {
      dateFns,
    },
  });

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/assets/styles/main.css',
  });

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: { input: 'src', output: '_site', data: '_data' },
  };
};
