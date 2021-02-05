// .vuepress/config.js
module.exports = {
    themeConfig: {
      logo: '/assets/steveify.png',
      nav: [
        { text: 'Home', link: '/' },
        // { text: 'Blog', link: '/blog.html/' },
        // { text: 'Shopify', link: 'https://vuepress.vuejs.org/' }
      ],
    //   navbar: false,
      sidebar: [
        '/',
        '/page-a',
        ['/page-b', 'Explicit link text']
      ],
      head: [
        [
          "link",
          {
            rel: "stylesheet",
            href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          }
        ]
      ]
    }
  }
  