<script setup>
import { computed, ref } from 'vue';
import BotReply from './BotReply.vue';

/**
 * The /userinfo reply with its three pages. The buttons switch pages like in Discord.
 * Fields follow the bot's language file (commands.userinfo).
 *
 * <UserInfo />
 */
const code = t => `<code>${t}</code>`;
const pages = {
  general: {
    label: 'General Information',
    fields: [
      { name: 'Status', value: '🟢 Online', inline: true },
      { name: 'Banned', value: 'No', inline: true },
      { name: 'Whitelisted', value: 'Yes', inline: true },
      { name: 'Operator', value: 'Yes (Level: 4)', inline: true },
      { name: 'Linked Discord Account', value: '@Lianecx', inline: true },
    ],
    footer: 'UUID: 7cb5b3a1-6d1d-4b1b-9b5e-1a2b3c4d5e6f',
  },
  survival: {
    label: 'Survival Information',
    fields: [
      { name: 'Gamemode', value: 'Survival', inline: true },
      { name: 'Score', value: '1248 💎', inline: true },
      { name: 'Health', value: '10.0 ❤️', inline: true },
      { name: 'Food Level', value: '20 🍗 (Saturation: 5)', inline: true },
      { name: 'XP', value: '2248 ✨ (Level: 36)', inline: true },
      { name: 'Play Time', value: '50h 29m 51s', inline: true },
      { name: 'Teams', value: 'builders', inline: true },
    ],
  },
  admin: {
    label: 'Admin Information',
    style: 'danger',
    fields: [
      { name: 'Current Position', html: true, value: `${code('120, 64, -340')} (Dimension: Overworld)`, inline: true },
      { name: 'Spawn Location', html: true, value: `${code('0, 64, 0')} (Dimension: Overworld)`, inline: true },
      { name: 'Last Death Location', html: true, value: `${code('-12, 30, 88')} (Dimension: Nether)`, inline: true },
    ],
  },
};

const page = ref('general');
const current = computed(() => pages[page.value]);
// Like the real bot: all buttons stay, and the open page's turns blurple.
const buttons = computed(() => Object.entries(pages)
  .map(([key, p]) => ({ key, label: p.label, style: key === page.value ? 'primary' : p.style })));
</script>

<template>
  <BotReply
    command="/userinfo user: Lianecx"
    title="User Information"
    :fields="current.fields"
    :footer="current.footer"
    :buttons="buttons"
    @button="b => (page = b.key)"
  />
</template>
