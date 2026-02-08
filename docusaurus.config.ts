import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'قانون اساسی نوین',
  tagline: 'چارچوب قانون اساسی برای آینده دموکراتیک ایران',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://qanuneasasi.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'qanuneasasi',
  projectName: 'qanuneasasi.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization - Farsi only
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page link
          editUrl: 'https://github.com/qanuneasasi/qanuneasasi.github.io/tree/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // Enable versioning for constitutional amendments
          includeCurrentVersion: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'مقالات فدرالیست ایران',
          blogDescription: 'مقالات توضیحی درباره چارچوب قانون اساسی',
          blogSidebarTitle: 'همه مقالات',
          editUrl: 'https://github.com/qanuneasasi/qanuneasasi.github.io/tree/main/',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/rtl.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card image
    image: 'img/social-card.jpg',

    // Announcement bar for important notices
    announcementBar: {
      id: 'draft_notice',
      content:
        '⚠️ این سند در حال تدوین است و هنوز نهایی نشده است',
      backgroundColor: '#fef3c7',
      textColor: '#92400e',
      isCloseable: true,
    },

    navbar: {
      title: 'قانون اساسی نوین',
      logo: {
        alt: 'Qanun-e Asasi Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'constitutionSidebar',
          position: 'left',
          label: 'قانون اساسی',
        },
        {
          to: '/blog',
          label: 'مقالات فدرالیست',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'منابع',
        },
        // Right side items
        {
          to: '/docs/contributing',
          label: 'مشارکت',
          position: 'right',
        },
        {
          href: 'https://github.com/qanuneasasi/qanuneasasi.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'محتوا',
          items: [
            {
              label: 'قانون اساسی',
              to: '/docs/preamble',
            },
            {
              label: 'مقالات فدرالیست',
              to: '/blog',
            },
            {
              label: 'منابع تطبیقی',
              to: '/docs/resources/comparative/',
            },
          ],
        },
        {
          title: 'مشارکت',
          items: [
            {
              label: 'راهنمای مشارکت',
              to: '/docs/contributing',
            },
            {
              label: 'بحث و گفتگو',
              href: 'https://github.com/qanuneasasi/qanuneasasi.github.io/discussions',
            },
            {
              label: 'پیشنهاد تغییرات',
              href: 'https://github.com/qanuneasasi/qanuneasasi.github.io/pulls',
            },
          ],
        },
        {
          title: 'اسناد حاکمیتی',
          items: [
            {
              label: 'ساختار حاکمیت',
              href: 'https://github.com/qanuneasasi/qanuneasasi.github.io/blob/main/GOVERNANCE.md',
            },
            {
              label: 'منشور اخلاقی',
              href: 'https://github.com/qanuneasasi/qanuneasasi.github.io/blob/main/CODE_OF_CONDUCT.md',
            },
            {
              label: 'مجوز (CC BY-SA 4.0)',
              href: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fa',
            },
          ],
        },
      ],
      copyright: `این اثر تحت مجوز Creative Commons Attribution-ShareAlike 4.0 International منتشر شده است.<br/>با ❤️ توسط مردم ایران، برای مردم ایران`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    // Algolia search (to be configured after DocSearch approval)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'qanun-e-asasi',
    //   contextualSearch: true,
    //   searchPagePath: 'search',
    // },

    // Table of contents configuration
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    // Color mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Giscus comments (GitHub Discussions based)
    // To be configured after repo creation
  } satisfies Preset.ThemeConfig,

  // Plugins
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  // Markdown configuration
  markdown: {
    mermaid: false,
  },

  // Client modules for custom scripts
  clientModules: [
    require.resolve('./src/clientModules/blogRTL.js'),
  ],

  // Additional themes (mermaid theme can be added later if needed)
  // themes: ['@docusaurus/theme-mermaid'],
};

export default config;
