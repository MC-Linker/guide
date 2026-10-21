import '@skyra/discord-components-core';
import '@fontsource-variable/pixelify-sans';
import '@fontsource-variable/noto-sans';
import { defineClientConfig } from 'vuepress/client';
import BotReply from './components/BotReply.vue';
import McChat from './components/McChat.vue';
import CommandInfo from './components/CommandInfo.vue';
import SplitView from './components/SplitView.vue';
import ServerInfo from './components/ServerInfo.vue';
import { fixNarrowEmbeds } from './discordFixes.js';

export default defineClientConfig({
  enhance({ app }) {
    if(typeof window !== 'undefined') void fixNarrowEmbeds();
    app.component('BotReply', BotReply);
    app.component('McChat', McChat);
    app.component('CommandInfo', CommandInfo);
    app.component('SplitView', SplitView);
    app.component('ServerInfo', ServerInfo);
  },
});
