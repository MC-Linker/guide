<script setup>
import { computed, ref } from 'vue';
import BotReply from './BotReply.vue';

/**
 * /inventory with show_details: True. A few item buttons open the item's details under the
 * inventory, like the real bot (commands.inventory in its language file).
 *
 * <InventoryExample />
 */
const avatar = 'https://mc-heads.net/avatar/TheAnnoying/64';
const items = {
  chest: {
    button: 'Chest: Netherite Chestplate',
    author: "TheAnnoying's Chest slot",
    description: "Here's information about the <strong>Netherite Chestplate</strong>. [1/1]",
    fields: [
      { name: 'Durability', value: '592/592', inline: true },
      { name: 'Enchantments', html: true, value: '- Protection IV<br>- Unbreaking III', inline: true },
    ],
    footer: 'Item Id: minecraft:netherite_chestplate',
  },
  dirt: {
    button: '#4: Dirt',
    author: "TheAnnoying's 4th slot",
    description: "Here's information about the <strong>Dirt</strong>. [64/64]",
    footer: 'Item Id: minecraft:dirt',
  },
  tnt: {
    button: '#8: TNT',
    author: "TheAnnoying's 8th slot",
    description: "Here's information about the <strong>TNT</strong>. [64/64]",
    footer: 'Item Id: minecraft:tnt',
  },
};

const open = ref(null);
const extra = computed(() => {
  const item = items[open.value];
  if(!item) return null;
  return { title: 'Item Information', color: '#43611a', authorIcon: avatar, ...item };
});
const buttons = computed(() => Object.entries(items)
  .map(([key, i]) => ({ key, label: i.button, style: key === open.value ? 'primary' : 'secondary' })));
</script>

<template>
  <BotReply
    command="/inventory user: TheAnnoying show_details: True"
    title="Player Inventory"
    image="/assets/inventory.png"
    :extra="extra"
    :buttons="buttons"
    @button="b => (open = b.key)"
  >Here's the inventory of <strong>TheAnnoying</strong>:</BotReply>
</template>
