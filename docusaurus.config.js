// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Uranium Fever',
  tagline: 'A Hardcore Wabbajack Modlist for Tale of Two Wastelands',
  favicon: 'img/UF.ico',

  // Set the production url of your site here
  url: 'https://uraniumfever.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nickchapman3773', // Usually your GitHub org/user name.
  projectName: 'Uranium-Fever', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/NickChapman3773/Uranium-Fever/edit/main/",
        },
        blog: {
          showReadingTime: false,
          editUrl:
            "https://github.com/NickChapman3773/Uranium-Fever/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
            colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
            docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Replace with your project's social card
      image: 'img/link.jpg',
      navbar: {
        title: '             ',
        logo: {
          alt: 'UF Logo',
          src: 'img/UF.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Instructions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gallerySidebar',
            position: 'right',
            label: 'Gallery',
          },
          {
            type: "doc",
            docId: "faq",
            position: "right",
            label: "FAQ",
          },
          {
            type: "docSidebar",
            sidebarId: "changelogSidebar",
            position: "right",
            label: "Changelog",
          },
          {
            type: "docSidebar",
            sidebarId: "appendixSidebar",
            position: "right",
            label: "Appendix",
          },
          {
            type: "doc",
            docId: "supportfeedback",
            position: "right",
            label: "Help",
          },
        ],
      },
      footer: {
        style: 'dark',
links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Uu6gZZSaeA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Uranium Fever Team`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vscdarkplus,
      },
    }),
};

export default config;
