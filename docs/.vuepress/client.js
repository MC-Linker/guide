import '@skyra/discord-components-core';
import '@fontsource-variable/pixelify-sans';
import '@fontsource-variable/dm-sans';
import { defineClientConfig } from 'vuepress/client';
import BotReply from './components/BotReply.vue';
import McChat from './components/McChat.vue';
import CommandInfo from './components/CommandInfo.vue';
import SplitView from './components/SplitView.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('BotReply', BotReply);
    app.component('McChat', McChat);
    app.component('CommandInfo', CommandInfo);
    app.component('SplitView', SplitView);
  },
});
