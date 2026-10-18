<script setup>
/**
 * The summary at the top of each command page.
 *
 * <CommandInfo discord="Administrator" where="Servers" needs="A connected server" />
 */
defineProps({
  discord: { type: String, default: 'Everyone' },
  minecraft: { type: String, default: '' },
  where: { type: String, default: 'Discord servers' },
  needs: { type: String, default: 'A connected Minecraft server' },
});
</script>

<template>
  <dl class="command-info">
    <div>
      <dt>Who can use it</dt>
      <dd>{{ discord }} <RouterLink class="more" to="/guide/getting-started/permissions.html">(change this)</RouterLink></dd>
    </div>
    <div v-if="minecraft">
      <dt>Minecraft permission</dt>
      <dd><code>{{ minecraft }}</code></dd>
    </div>
    <div>
      <dt>Works in</dt>
      <dd>{{ where }}</dd>
    </div>
    <div>
      <dt>Needs</dt>
      <dd>{{ needs }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.command-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.75rem 1.5rem;
  margin: 1rem 0 1.5rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-left: 4px solid;
  border-image: linear-gradient(#6f9e2d 50%, #5865f2 50%) 1;
}
dt {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-mute);
}
dd {
  margin: 0.15rem 0 0;
  font-weight: 500;
}
.more {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
