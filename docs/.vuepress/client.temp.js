import { defineClientConfig } from '@vuepress/client';
import * as pkg from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css';

const {
    DiscordButton,
    DiscordButtons,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordInteraction,
    DiscordMarkdown,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReaction,
    DiscordReactions,
    install,
} = pkg;

export default defineClientConfig({
    enhance({ app }) {
        app.use(install, {
            profiles: {
                bot: {
                    author: 'Guide Bot',
                    avatar: 'green',
                    bot: true,
                },
            },
        });

        app.component('DiscordButton', DiscordButton);
        app.component('DiscordButtons', DiscordButtons);
        app.component('DiscordEmbed', DiscordEmbed);
        app.component('DiscordEmbedField', DiscordEmbedField);
        app.component('DiscordEmbedFields', DiscordEmbedFields);
        app.component('DiscordInteraction', DiscordInteraction);
        app.component('DiscordMarkdown', DiscordMarkdown);
        app.component('DiscordMention', DiscordMention);
        app.component('DiscordMessage', DiscordMessage);
        app.component('DiscordMessages', DiscordMessages);
        app.component('DiscordReaction', DiscordReaction);
        app.component('DiscordReactions', DiscordReactions);
    },
});
