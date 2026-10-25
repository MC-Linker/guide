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
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/logo.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    // Whitney (Discord's font) for the message mockups comes from this CDN.
    ['link', { rel: 'preconnect', href: 'https://cdn.skyra.pw', crossorigin: '' }],
    ['link', { rel: 'preload', href: '/fonts/minecraft-seven.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }],
    ['meta', { name: 'theme-color', content: '#e6e8eb' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    // og:title, og:description, og:url and the Discord preview are set per page by linkPreview.js.
    ['meta', { property: 'og:site_name', content: 'MC Linker Guide' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: 'https://mclinker.com/logo.png' }],
    ['meta', { property: 'og:image:width', content: '1024' }],
    ['meta', { property: 'og:image:height', content: '1024' }],
  ],
  // Inline code only breaks after a slash inside a path (not the one in front of a command), so paths wrap in narrow table cells but short words like `plugins` stay whole.
  extendsMarkdown: md => {
    md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      const content = md.utils.escapeHtml(token.content).replace(/(?<=\S)\/(?=\S)/g, '/<wbr>');
      return `<code${self.renderAttrs(token)}>${content}</code>`;
    };

    // The "leaves the site" arrow sticks to the link's last word, so it never wraps onto a line of its own.
    md.core.ruler.push('external-link-nowrap', state => {
      for (const block of state.tokens) {
        const tokens = block.children;
        if (block.type !== 'inline' || !tokens) continue;
        for (let i = 0; i < tokens.length; i++) {
          if (tokens[i].type !== 'link_open' || !/^https?:\/\//.test(tokens[i].attrGet('href') ?? '')) continue;
          const close = tokens.findIndex((t, j) => j > i && t.type === 'link_close');
          const last = tokens[close - 1];
          if (close < 0 || last.type !== 'text' || !last.content.trim()) continue;
          const [, before, word] = last.content.match(/^([\s\S]*?)(\S+\s*)$/);
          last.content = before;
          const wrap = new state.Token('html_inline', '', 0);
          wrap.content = `<span class="ext-nowrap">${md.utils.escapeHtml(word.trimEnd())}<span class="vp-external-link-icon" aria-hidden="true"></span></span>`;
          tokens.splice(close, 0, wrap);
          tokens[i].attrJoin('class', 'no-external-link-icon');
        }
      }
    });
  },
  theme: defaultTheme({
    docsRepo: 'MC-Linker/guide',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    themePlugins: {
      prismjs: { lineNumbers: false },
      // No scroll-to-top button.
      backToTop: false,
      git: {
        contributors: {
          // E reviews and approves every change, so credit Lianecx and leave AI co-authors out.
          transform: contributors => {
            const people = contributors.filter(c => !/claude/i.test(c.name) && !/anthropic\.com$/i.test(c.email));
            if (!people.some(c => c.username === 'Lianecx' || c.name === 'Lianecx'))
              people.unshift({ name: 'Lianecx', username: 'Lianecx', email: '', commits: 0, url: 'https://github.com/Lianecx' });
            return people;
          },
        },
      },
    },
    // The banner hangs from the middle of the header bar (styles/index.scss).
    logo: '/banner.png',
    // Ore UI is dark only, like mclinker.com.
    colorMode: 'dark',
    colorModeSwitch: false,
    navbar: [
      // Back to mclinker.com, in the same tab like the Links menu's website row.
      { text: 'Home', link: 'https://mclinker.com/', target: '_self' },
      { text: 'Quick start', link: '/guide/getting-started/quick-start.md' },
      { text: 'Commands', link: '/guide/commands/' },
      { text: 'Help', link: '/guide/help/troubleshooting.md' },
      { text: 'Add to Discord', link: 'https://mclinker.com/invite' },
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
