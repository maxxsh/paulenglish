module.exports = (coll) => {
  const posts = [
    // ...coll.getFilteredByGlob("src/posts/**.md"),
    ...coll.getFilteredByGlob("src/posts/**/*.md"),
  ];

  return posts.reverse();
};
