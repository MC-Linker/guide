import { description } from '../../package.json';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { redirectPlugin } from '@vuepress/plugin-redirect';

const isCustomElement = tag => tag.startsWith('discord-');

export default defineUserConfig({
  lang: 'en-US',
  title: 'MC Linker Guide',
  description,
  port: 8889,
  bundler: viteBundler({
    vuePluginOptions: { template: { compilerOptions: { isCustomElement } } },
  }),
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#6f9e2d' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'og:title', content: 'MC Linker Guide' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://guide.mclinker.com/' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: 'https://guide.mclinker.com/logo.png' }],
  ],
  theme: defaultTheme({
    repo: 'MC-Linker',
    docsRepo: 'MC-Linker/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    themePlugins: { prismjs: { lineNumbers: false } },
    logo: '/logo.svg',
    navbar: [
      { text: 'Home', link: 'https://mclinker.com/', target: '_self' },
      { text: 'Quick start', link: '/guide/getting-started/quick-start.md' },
      { text: 'Commands', link: '/guide/commands/' },
      { text: 'Help', link: '/guide/help/troubleshooting.md' },
      { text: 'Add to Discord', link: 'https://mclinker.com/invite' },
      { text: 'Support server', link: 'https://discord.gg/rX36kZUGNK' },
    ],
    sidebar: {
      '/guide/': [
        '/guide/README.md',
        {
          text: 'Getting started',
          collapsible: true,
          children: [
            '/guide/getting-started/quick-start.md',
            '/guide/getting-started/installing-the-plugin.md',
            '/guide/getting-started/connecting.md',
            '/guide/getting-started/permissions.md',
            '/guide/getting-started/disconnecting.md',
          ],
        },
        {
          text: 'Features',
          collapsible: true,
          children: [
            '/guide/features/chat-bridge.md',
            '/guide/features/console-channel.md',
            '/guide/features/stat-channels.md',
            '/guide/features/role-sync.md',
            '/guide/features/account-linking.md',
            '/guide/features/join-requirements.md',
            '/guide/features/linked-roles.md',
            '/guide/features/direct-messages.md',
            '/guide/features/customization.md',
            '/guide/features/custom-bot.md',
          ],
        },
        {
          text: 'Commands',
          collapsible: true,
          children: [
            '/guide/commands/README.md',
            '/guide/commands/inventory.md',
            '/guide/commands/stats.md',
            '/guide/commands/advancements.md',
            '/guide/commands/userinfo.md',
            '/guide/commands/serverinfo.md',
            '/guide/commands/command.md',
            '/guide/commands/message.md',
            '/guide/commands/ban-unban.md',
            '/guide/commands/kick.md',
            '/guide/commands/op-deop.md',
            '/guide/commands/gamemode.md',
            '/guide/commands/help.md',
          ],
        },
        {
          text: 'Plugin',
          collapsible: true,
          children: [
            '/guide/plugin/commands.md',
            '/guide/plugin/configuration.md',
            '/guide/plugin/permissions.md',
            '/guide/plugin/integrations.md',
          ],
        },
        {
          text: 'Help',
          collapsible: true,
          children: [
            '/guide/help/troubleshooting.md',
            '/guide/help/faq.md',
          ],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({ maxSuggestions: 8 }),
    // Old URLs (from the previous guide structure and old website links) keep working.
    redirectPlugin({
      config: {
        '/guide/core/connect.html': '/guide/getting-started/quick-start.html',
        '/guide/core/disconnect.html': '/guide/getting-started/disconnecting.html',
        '/guide/core/account-connect.html': '/guide/features/account-linking.html',
        '/guide/core/linked-roles.html': '/guide/features/linked-roles.html',
        '/guide/core/customize.html': '/guide/features/customization.html',
        '/guide/core/permissions.html': '/guide/getting-started/permissions.html',
        '/guide/player-info/inventory.html': '/guide/commands/inventory.html',
        '/guide/player-info/stats.html': '/guide/commands/stats.html',
        '/guide/player-info/advancements.html': '/guide/commands/advancements.html',
        '/guide/player-info/userinfo.html': '/guide/commands/userinfo.html',
        '/guide/player-info/message.html': '/guide/commands/message.html',
        '/guide/server-management/command.html': '/guide/commands/command.html',
        '/guide/server-management/serverinfo.html': '/guide/commands/serverinfo.html',
        '/guide/server-management/creating.html': '/guide/features/chat-bridge.html',
        '/guide/server-management/managing.html': '/guide/features/chat-bridge.html',
        '/guide/server-management/statchannel.html': '/guide/features/stat-channels.html',
        '/guide/server-management/rolesync.html': '/guide/features/role-sync.html',
        '/guide/moderation/ban-unban.html': '/guide/commands/ban-unban.html',
        '/guide/moderation/kick.html': '/guide/commands/kick.html',
        '/guide/moderation/op-deop.html': '/guide/commands/op-deop.html',
        '/guide/moderation/gamemode.html': '/guide/commands/gamemode.html',
        '/guide/moderation/commands.html': '/guide/commands/command.html',
        '/guide/plugin/linker-command.html': '/guide/plugin/commands.html',
        '/guide/plugin/config-yml.html': '/guide/plugin/configuration.html',
        '/guide/main/inventory.html': '/guide/commands/inventory.html',
        '/guide/chatchannels/creating.html': '/guide/features/chat-bridge.html',
      },
    }),
  ],
});
