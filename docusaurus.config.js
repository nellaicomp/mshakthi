import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Money Shakthi',
  tagline: 'Give Shakthi to your Money',
  favicon: 'img/favicon.ico',
  url: 'https://moneyshakthi.com',
  baseUrl: '/',
  organizationName: 'moneyshakthi', // Usually your GitHub org/user name.
  projectName: 'mshakthi', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
    i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         editUrl:
         'https://github.com/moneyshakthi/mshakthi/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      metadata: [
        {name: 'keywords', content: 'Money Shakthi, DPIIT'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      // Replace with your project's social card
      image: 'img/mshakthi-social-card.jpg',
      navbar: {
        title: 'Money Shakthi',
        logo: {
          alt: 'Money Shakthi Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://nellaicomputers.com/assets/files/startup-55b15afa94f13cffb875763face70f33.pdf',
            label: 'DPIIT',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pension',
            items: [
              {
                label: 'PFRDA',
                to: 'https://www.pfrda.org.in/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/moneyshakthi',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/moneyshakthi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'NPS',
                to: 'https://www.npstrust.org.in/',
              },
              {
                label: 'AMFI',
                href: 'https://www.amfiindia.com/investor-corner/knowledge-center/what-are-mutual-funds-new.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nellai Computers Pvt Ltd .`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(255, 103, 31)',
            },
          ],
        },
      ],
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-999X9XX9XX',
          anonymizeIP: true,
        },
      ],
      [ require.resolve('docusaurus-lunr-search'), {
        languages: ['en'] // language codes
      }],
    ],
  
};

export default config;
