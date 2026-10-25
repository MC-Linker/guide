<script setup>
import { computed, ref } from 'vue';
import BotReply from './BotReply.vue';

/**
 * /advancements with show_details: True. Earned advancements have blurple buttons, like the real
 * bot (commands.advancements in its language file), and open their details under the tree.
 *
 * <AdvancementsExample />
 */
const avatar = 'https://mc-heads.net/avatar/Lianecx/64';
const advancements = {
  diamonds: {
    name: 'Diamonds!',
    obtained: true,
    description: 'Acquire diamonds',
    criteria: 'Diamond',
    date: 'March 14, 2026 6:42 PM',
    icon: 'Diamond',
    type: 'Task',
    id: 'story/mine_diamond',
  },
  armor: {
    name: 'Suit Up',
    obtained: true,
    description: 'Protect yourself with a piece of iron armor',
    criteria: 'Iron Chestplate',
    date: 'March 12, 2026 9:15 PM',
    icon: 'Iron Chestplate',
    type: 'Task',
    id: 'story/obtain_armor',
  },
  enchant: {
    name: 'Enchanter',
    obtained: false,
    description: 'Enchant an item at an Enchanting Table',
    criteria: '',
    date: '',
    icon: 'Enchanted Book',
    type: 'Task',
    id: 'story/enchant_item',
  },
};

const open = ref(null);
const extra = computed(() => {
  const a = advancements[open.value];
  if(!a) return null;
  return {
    title: a.name,
    description: `<em>${a.description}</em>`,
    color: '#43611a',
    author: 'Lianecx',
    authorIcon: avatar,
    // Like the bot, empty fields are left out: nothing earned yet means no Requirements or Acquired on.
    fields: [
      { name: 'Requirements', value: a.criteria, inline: true },
      { name: 'Acquired on', value: a.date, inline: true },
      { name: 'Icon Item', value: a.icon },
      { name: 'Type', value: a.type, inline: true },
    ].filter(f => f.value),
    footer: `Advancement ${a.obtained ? 'Acquired' : 'Not Acquired'}\nId: ${a.id}`,
  };
});
// Blurple for earned advancements, grey for the rest.
const buttons = computed(() => Object.entries(advancements)
  .map(([key, a]) => ({ key, label: a.name, style: a.obtained ? 'primary' : 'secondary' })));
</script>

<template>
  <BotReply
    command="/advancements minecraft user: Lianecx show_details: True"
    title="Player Advancements"
    image="/assets/advancements.png"
    :extra="extra"
    :buttons="buttons"
    @button="b => (open = b.key)"
  >Here are the advancements of <strong>Lianecx</strong>:</BotReply>
</template>
