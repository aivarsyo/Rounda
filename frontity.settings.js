const settings = {
  name: "rounda",
  state: {
    frontity: {
      url: "https://aivars.dk/admin.Rounda/",
      title: "Rounda",
      description: "Digital Agency",
    },
  },
  packages: [
    {
      name: "rounda",
      state: {
        theme: {
          autoPrefetch: "hover",
          menu: [
            ["Home", "/"],
            ["Test Page", "/test-page"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      active: true,
      state: {
        source: {
          api: "https://aivars.dk/admin.Rounda/wp-json",
          homepage: "/home",
          postsPage: "/test-page",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
