<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

/**
 * The header's "Links" dropdown, like mclinker.com's: a dark Ore face with a chevron,
 * opening a grey popup of rows. With `list`, just the rows (for the phone sidebar).
 */
const props = defineProps({ list: Boolean });

const links = [
  { title: 'Support server', hint: 'Opens Discord in a new tab', href: 'https://discord.gg/rX36kZUGNK', icon: '/nav/support-server.png' },
  { title: 'GitHub', hint: 'MC Linker is completely open source', href: 'https://github.com/MC-Linker', icon: '/nav/github.png' },
  { title: 'Donate', hint: 'Opens GitHub Sponsors in a new tab', href: 'https://github.com/sponsors/MC-Linker', icon: '/nav/donate.png' },
  { title: 'Meet the team', hint: 'The people behind MC Linker', href: 'https://mclinker.com/team', icon: '/nav/meet-the-team.png' },
  { title: 'MC Linker website', hint: 'Opens mclinker.com', href: 'https://mclinker.com/', icon: '/nav/website.png', sameTab: true },
];


const open = ref(false);
const root = ref(null);
const button = ref(null);

function outside(e) {
  if(open.value && root.value && !root.value.contains(e.target)) open.value = false;
}
function keys(e) {
  if(e.key === 'Escape' && open.value) {
    open.value = false;
    button.value?.focus();
  }
}
onMounted(() => {
  window.addEventListener('pointerdown', outside);
  window.addEventListener('keydown', keys);
});
onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', outside);
  window.removeEventListener('keydown', keys);
});

// Pixel sprites as SVG rects, one texture pixel each.
const pixels = rows => rows.flatMap((r, y) => [...r].map((c, x) => (c === 'a' ? { x, y } : null)).filter(Boolean));
const chevron = pixels(['a.....a', '.a...a.', '..a.a..', '...a...']);
const outArrow = pixels(['..aaaa', '....aa', '...a.a', '..a..a', '.a....', 'a.....']);
</script>

<template>
  <div v-if="props.list" class="ml-links-list">
    <p class="ml-links-title">Links</p>
    <div class="ml-links-rows">
      <a v-for="l in links" :key="l.title" class="ml-row" :href="l.href" :target="l.sameTab ? undefined : '_blank'" :rel="l.sameTab ? undefined : 'noopener'">
        <span class="ml-thumb"><img :src="l.icon" alt="" width="36" height="36" /></span>
        <span class="ml-text"><span class="ml-row-title">{{ l.title }}</span><span class="ml-row-sub">{{ l.hint }}</span></span>
        <svg v-if="!l.sameTab" class="ml-out" viewBox="0 0 6 6" aria-hidden="true"><rect v-for="p in outArrow" :key="`${p.x}-${p.y}`" :x="p.x" :y="p.y" width="1" height="1" fill="#fff" /></svg>
      </a>
    </div>
  </div>
  <div v-else ref="root" class="ml-links">
    <button ref="button" type="button" class="ml-links-face" :class="{ pressed: open }" :aria-expanded="open" aria-controls="ml-links-popup" @click="open = !open">
      <span>Links</span>
      <svg class="ml-chev" viewBox="0 0 7 4" aria-hidden="true"><rect v-for="p in chevron" :key="`${p.x}-${p.y}`" :x="p.x" :y="p.y" width="1" height="1" fill="#fff" /></svg>
    </button>
    <div v-if="open" id="ml-links-popup" class="ml-links-popup" @click="open = false">
      <a v-for="l in links" :key="l.title" class="ml-row" :href="l.href" :target="l.sameTab ? undefined : '_blank'" :rel="l.sameTab ? undefined : 'noopener'">
        <span class="ml-thumb"><img :src="l.icon" alt="" width="36" height="36" /></span>
        <span class="ml-text"><span class="ml-row-title">{{ l.title }}</span><span class="ml-row-sub">{{ l.hint }}</span></span>
        <svg v-if="!l.sameTab" class="ml-out" viewBox="0 0 6 6" aria-hidden="true"><rect v-for="p in outArrow" :key="`${p.x}-${p.y}`" :x="p.x" :y="p.y" width="1" height="1" fill="#fff" /></svg>
        <span v-if="!l.sameTab" class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </div>
</template>
