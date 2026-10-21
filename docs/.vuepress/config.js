import { description } from '../../package.json';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { redirectPlugin } from '@vuepress/plugin-redirect';
import { linkPreviewPlugin } from './linkPreview.js';
import { redirects } from './redirects.js';

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
    ['link', { rel: 'preload', href: '/fonts/minecraft-seven.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['meta', { name: 'theme-color', content: '#e6e8eb' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    // og:title, og:description, og:url and the Discord preview are set per page by linkPreview.js.
    ['meta', { property: 'og:site_name', content: 'MC Linker Guide' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: 'https://mclinker.com/logo.png' }],
  ],
  theme: defaultTheme({
    repo: 'MC-Linker',
    docsRepo: 'MC-Linker/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    themePlugins: { prismjs: { lineNumbers: false } },
    logo: '/logo.svg',
    // Ore UI is dark only, like mclinker.com.
    colorMode: 'dark',
    colorModeSwitch: false,
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
    linkPreviewPlugin(),
    // Old URLs (from the previous guide structure and old website links) keep working.
    redirectPlugin({ config: redirects }),
  ],
});
