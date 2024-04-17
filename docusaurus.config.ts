import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./src/plugins/tailwind-config.cjs";
import remarkgfm from 'remark-gfm';

const config: Config = {
  title: "Pelican",
  tagline: "From prehistoric to peak performance: Pelican takes flight!",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  url: "https://pelican.dev",
  baseUrl: "/",
  organizationName: "pelican-dev",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/pelican-dev/docs/",
          remarkPlugins: [remarkgfm]
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/tailwind.css"),
            require.resolve("./src/css/custom.scss"),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    matomo: {
      matomoUrl: "https://track.areyouscared.dev/",
      siteId: "2", // 1-prod, 2-dev
      phpLoader: "matomo.php",
      jsLoader: "matomo.js",
    },
    navbar: {
      title: "Pelican",
      logo: {
        src: "img/logo.png",
      },
      items: [
        /* Enable on first release.
         {
          to: '/docs/panel/getting-started',
          label: 'Install',
          position: 'left'
        },  */
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/donate", label: "Donate", position: "left" },
        { to: "https://news.pelican.dev/", label: "Newsletter", position: "left"},
        { to: "/faq", label: "FAQ", position: "left"},
        {
          href: "https://github.com/pelican-dev/",
          position: "right",
          className: "github-link",
        },
        {
          href: "https://discord.gg/pelican-panel",
          position: "right",
          className: "discord-link",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      logo: {
        src: "img/logo.png",
        height: "64px",
        width: "64px",
      },
      style: "dark",
      links: [
      /* Enable on first release.
        {
          title: 'Documentation',
          items: [
            {
              label: 'Panel',
              to: '/docs/panel/getting-started',
            },
            {
              label: 'Wings',
              to: '/docs/wings/install',
            },
            {
              label: 'SSL Setup',
              to: '/docs/guides/ssl'
            },
          ],
        },*/
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/pelican-panel",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/pelican-dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pelican`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "nginx",
        "apacheconf",
        "ini",
        "sql",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    //require.resolve('docusaurus-lunr-search'),
    "docusaurus-plugin-sass",
    "docusaurus-plugin-matomo",
    tailwindPlugin,
  ],
};

export default config;
