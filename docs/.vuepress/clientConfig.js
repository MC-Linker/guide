import { defineClientConfig } from '@vuepress/client';
import '@skyra/discord-components-core';
import { setConfig } from '@skyra/discord-components-core';

export default defineClientConfig({
    enhance({ app }) {
        setConfig({
            profiles: {
                lianecx: {
                    author: 'Lianecx',
                    avatar: 'https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png',
                },
                mclinker: {
                    author: 'MC Linker',
                    avatar: 'https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png',
                    bot: true,
                    verified: true,
                },
            },
        });
        app.config.compilerOptions.isCustomElement = tag => tag.startsWith('discord-');
        console.log('Client config loaded')
    },
});
