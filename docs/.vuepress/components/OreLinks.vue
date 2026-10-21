<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

/**
 * The header's "Links" dropdown, like mclinker.com's: a dark Ore face with a chevron,
 * opening a grey popup of rows. With `list`, just the rows (for the phone sidebar).
 */
const props = defineProps({ list: Boolean });

const links = [
  { title: 'Add to Discord', hint: 'Opens Discord in a new tab', href: 'https://mclinker.com/invite', icon: '/nav/add-to-discord.png' },
  { title: 'Get the plugin', hint: 'Opens Modrinth in a new tab', href: 'https://modrinth.com/plugin/discord-linker', icon: '/nav/get-the-plugin.png' },
  { title: 'Support server', hint: 'Opens Discord in a new tab', href: 'https://discord.gg/rX36kZUGNK', icon: '/nav/support-server.png' },
  { title: 'Donate', hint: 'Opens GitHub Sponsors in a new tab', href: 'https://github.com/sponsors/MC-Linker', icon: '/nav/donate.png' },
  { title: 'Meet the team', hint: 'The people behind MC Linker', href: 'https://mclinker.com/team', icon: '/nav/meet-the-team.png' },
  { title: 'MC Linker website', hint: 'Opens mclinker.com', href: 'https://mclinker.com/', icon: '/nav/website.png', sameTab: true },
  { title: 'GitHub', hint: 'Opens GitHub in a new tab', href: 'https://github.com/MC-Linker', github: true },
];

// The phone sidebar already has an "Add to Discord" button right above.
const listLinks = links.filter(l => !l.href.endsWith('/invite'));

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
const github = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';
</script>

<template>
  <div v-if="props.list" class="ml-links-list">
    <p class="ml-links-title">Links</p>
    <div class="ml-links-rows">
      <a v-for="l in listLinks" :key="l.title" class="ml-row" :href="l.href" :target="l.sameTab ? undefined : '_blank'" :rel="l.sameTab ? undefined : 'noopener'">
        <span class="ml-thumb"><img v-if="l.icon" :src="l.icon" alt="" width="36" height="36" /><svg v-else viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path :d="github" fill="#fff" /></svg></span>
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
        <span class="ml-thumb"><img v-if="l.icon" :src="l.icon" alt="" width="36" height="36" /><svg v-else viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path :d="github" fill="#fff" /></svg></span>
        <span class="ml-text"><span class="ml-row-title">{{ l.title }}</span><span class="ml-row-sub">{{ l.hint }}</span></span>
        <svg v-if="!l.sameTab" class="ml-out" viewBox="0 0 6 6" aria-hidden="true"><rect v-for="p in outArrow" :key="`${p.x}-${p.y}`" :x="p.x" :y="p.y" width="1" height="1" fill="#fff" /></svg>
        <span v-if="!l.sameTab" class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </div>
</template>
