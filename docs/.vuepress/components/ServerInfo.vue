<script setup>
import { computed, ref } from 'vue';
import BotReply from './BotReply.vue';

/**
 * The /serverinfo reply, the same as the website's demo: three pages, and the
 * buttons switch between them like they do in Discord.
 *
 * <ServerInfo />
 */
const code = t => `<code>${t}</code>`;
// Same fields as the bot's language file (commands.serverinfo): only the first page has the footer,
// the player count has no names, and the admin page lists counts.
const pages = {
  server: {
    label: 'Server Information',
    button: 'General Information',
    image: '/assets/serverlist.png',
    fields: [
      { name: 'Name', value: 'Linker SMP', inline: true },
      { name: 'MOTD', value: 'A cozy survival server', inline: true },
      { name: 'Players', value: '2/20', inline: true },
    ],
    footer: 'Server IP: testing.mclinker.com (26.2)',
  },
  world: {
    label: 'World Information',
    fields: [
      { name: 'Spawn Coordinates', html: true, value: `Players will spawn at ${code('0, 64, 0')} in world: ${code('world')}` },
      { name: 'Allow End/Nether', html: true, value: `End: ${code('Enabled')}<br>Nether: ${code('Enabled')}` },
      { name: 'Difficulty', value: 'Normal', inline: true },
      { name: 'Gamerules (only non-default values)', html: true, value: 'keepInventory: true<br>playersSleepingPercentage: 50' },
    ],
  },
  admin: {
    label: 'Admin Information',
    style: 'danger',
    fields: [
      { name: 'Plugins', html: true, value: 'Discord-Linker<br>EssentialsX<br>WorldEdit', inline: true },
      { name: 'Banned Users', value: '1', inline: true },
      { name: 'Operators', value: '1', inline: true },
      { name: 'Whitelist', value: 'Disabled', inline: true },
      { name: 'Seed', html: true, value: code('-4172144997902289642'), inline: true },
    ],
  },
};

const page = ref('server');
const current = computed(() => pages[page.value]);
// Like the real bot (its Pagination helper): all buttons stay, and the open page's turns blurple.
const buttons = computed(() => Object.entries(pages)
  .map(([key, p]) => ({ key, label: p.button ?? p.label, style: key === page.value ? 'primary' : p.style })));
</script>

<template>
  <BotReply
    command="/serverinfo"
    :title="current.label"
    color="#729e34"
    :image="current.image"
    :fields="current.fields"
    :footer="current.footer"
    :buttons="buttons"
    @button="b => (page = b.key)"
  />
</template>
