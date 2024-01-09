module.exports = {
  layout: "post",
  title: "Untitled",
  eleventyComputed: {
    permalink: (data) =>
      /\/index\.md$/.test(data.page.inputPath)
        ? `${data.page.fileSlug}/index.html`
        : `${data.page.fileSlug}.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        }
        return `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    },
  },
};
