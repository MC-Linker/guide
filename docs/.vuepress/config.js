import { description } from '../../package.json';
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'en-US',
  title: 'MC Linker Guide',
  description: description,
  port: 8889,
  bundler: viteBundler({}),
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#729e34' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'og:title', content: 'MC Linker Guide' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://guide.mclinker.com/' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
  ],
  theme: defaultTheme({
    repo: 'MC-Linker',
    docsRepo: 'MC-Linker/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    logo: '/logo.svg',
    navbar: [
      {
        text: 'Home',
        link: 'https://mclinker.com/',
        target: '_self',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Invite!',
        link: 'https://mclinker.com/invite',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/rX36kZUGNK',
      },
    ],
    sidebar: {
      '/guide/': [
        '/guide/README.md',
        {
          text: 'Core',
          collapsible: true,
          children: ['/guide/core/connect.md', '/guide/core/disconnect.md', '/guide/core/account-connect.md', '/guide/core/linked-roles.md', '/guide/core/customize.md', '/guide/core/permissions.md'],
        },
        {
          text: 'Player Info',
          collapsible: true,
          children: ['/guide/player-info/inventory.md', '/guide/player-info/stats.md', '/guide/player-info/advancements.md', '/guide/player-info/userinfo.md', '/guide/player-info/message.md'],
        },
        {
          text: 'Server Management',
          collapsible: true,
          children: ['/guide/server-management/command.md', '/guide/server-management/serverinfo.md', '/guide/server-management/creating.md', '/guide/server-management/managing.md', '/guide/server-management/statchannel.md', '/guide/server-management/rolesync.md'],
        },
        {
          text: 'Moderation',
          collapsible: true,
          children: ['/guide/moderation/ban-unban.md', '/guide/moderation/kick.md', '/guide/moderation/op-deop.md', '/guide/moderation/gamemode.md'],
        },
        {
          text: 'Plugin',
          collapsible: true,
          children: ['/guide/plugin/linker-command.md', '/guide/plugin/config-yml.md'],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({}),
  ],
});
