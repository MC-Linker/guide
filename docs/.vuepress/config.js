import { description } from '../../package.json';
import { defaultTheme, defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'en-US',
  title: 'MC Linker Guide',
  description: description,
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
          text: 'Connecting',
          collapsible: true,
          children: ['/guide/connecting/README.md', '/guide/connecting/plugin.md', '/guide/connecting/ftp.md', '/guide/connecting/backup.md', '/guide/connecting/disconnecting.md'],
        },
        {
          text: 'Chat Channels',
          collapsible: true,
          children: ['/guide/chatchannels/creating.md', '/guide/chatchannels/managing.md'],
        },
        {
          text: 'Moderating',
          collapsible: true,
          children: ['/guide/moderation/commands.md', '/guide/moderation/op-deop.md', '/guide/moderation/ban-unban.md', '/guide/moderation/gamemode.md', '/guide/moderation/kick.md'],
        },
        {
          text: 'Account Connections',
          collapsible: true,
          children: ['/guide/account/connecting.md', '/guide/account/linked-roles.md'],
        },
        {
          text: 'Main Features',
          collapsible: true,
          children: ['/guide/main/inventory.md', '/guide/main/stats.md', '/guide/main/advancements.md', '/guide/main/message.md'],
        },
        {
          text: 'Settings',
          collapsible: true,
          children: ['/guide/settings/managing-permissions.md', '/guide/settings/plugin-config.md', '/guide/settings/disable-enable.md'],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({}),
  ],
});
