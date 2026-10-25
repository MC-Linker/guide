import '@fontsource-variable/pixelify-sans';
import '@fontsource-variable/noto-sans';
import { defineClientConfig } from 'vuepress/client';
import BotReply from './components/BotReply.vue';
import McChat from './components/McChat.vue';
import CommandInfo from './components/CommandInfo.vue';
import SplitView from './components/SplitView.vue';
import ServerInfo from './components/ServerInfo.vue';
import NotFound from './components/NotFound.vue';
import Layout from './layouts/Layout.vue';
import { fixNarrowEmbeds } from './discordFixes.js';

export default defineClientConfig({
  enhance({ app }) {
    // The Discord message elements (Lit, ~80 KB gzipped) load on their own, after the page's main
    // script, so they don't hold up the first paint. Browser only: they need the DOM.
    if(typeof window !== 'undefined') void import('@skyra/discord-components-core').then(fixNarrowEmbeds);
    app.component('BotReply', BotReply);
    app.component('McChat', McChat);
    app.component('CommandInfo', CommandInfo);
    app.component('SplitView', SplitView);
    app.component('ServerInfo', ServerInfo);
  },
  layouts: { Layout, NotFound },
});
