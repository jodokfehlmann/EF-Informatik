// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const USERNAME = 'jodokfehlmann';
const REPO_NAME = 'EF-INFORMATIK';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lern Blog',
  tagline: 'EF Informatik',
  url: `https://${USERNAME}.github.io/`,
  baseUrl: `/${REPO_NAME}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: USERNAME, // Usually your GitHub org/user name.
  projectName: REPO_NAME, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${USERNAME}/${REPO_NAME}/tree/main/`,
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${USERNAME}/${REPO_NAME}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EF Blog',
        logo: {
          alt: 'Page Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'about-me',
            position: 'left',
            label: 'Dokumente',
          },
          {
            href: `https://github.com/${USERNAME}/${REPO_NAME}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Dokumente',
                to: '/docs/about-me',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Docusaurus.io',
                href: 'https://docusaurus.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: `https://github.com/${USERNAME}/${REPO_NAME}`,
              },
            ],
          },
        ],
        copyright: `Made with ❤️ at GBSL`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),  
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
