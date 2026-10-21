<script setup>
import { computed, ref } from 'vue';
import BotReply from './BotReply.vue';

/**
 * The /serverinfo reply, the same as the website's demo: three pages, and the
 * buttons switch between them like they do in Discord.
 *
 * <ServerInfo />
 */
const footer = 'Server IP: testing.mclinker.com (26.2)';
const pages = {
  server: {
    label: 'Server Information',
    color: '#729e34',
    fields: [
      { name: 'Name', value: 'Linker SMP', inline: true },
      { name: 'MOTD', value: 'A cozy survival server', inline: true },
      { name: 'Players', value: '2/20', inline: true },
      { name: 'Online', value: 'Lianecx, Cubey' },
    ],
    footer,
  },
  world: {
    label: 'World Information',
    color: '#729e34',
    fields: [
      { name: 'World', value: 'world', inline: true },
      { name: 'Difficulty', value: 'Normal', inline: true },
      { name: 'Hardcore', value: 'No', inline: true },
      { name: 'Time', value: 'Day ☀️', inline: true },
      { name: 'Weather', value: 'Clear', inline: true },
      { name: 'Spawn', value: '0, 64, 0', inline: true },
    ],
    footer,
  },
  admin: {
    label: 'Admin Information',
    style: 'danger',
    color: '#ed4245',
    fields: [
      { name: 'Operators', value: 'Lianecx', inline: true },
      { name: 'Whitelist', value: 'Off', inline: true },
      { name: 'Banned players', value: 'None', inline: true },
      { name: 'Plugins', value: 'Discord-Linker, EssentialsX, WorldEdit' },
    ],
    footer: 'Only server admins can see this page',
  },
};

const page = ref('server');
const current = computed(() => pages[page.value]);
const buttons = computed(() => Object.entries(pages)
  .filter(([key]) => key !== page.value)
  .map(([key, p]) => ({ key, label: p.label, style: p.style })));
</script>

<template>
  <BotReply
    command="/serverinfo"
    :title="current.label"
    :color="current.color"
    image="/assets/serverlist.png"
    :fields="current.fields"
    :footer="current.footer"
    :buttons="buttons"
    @button="b => (page = b.key)"
  />
</template>
