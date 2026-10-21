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
/* An Ore UI panel: dark face, outline, and a green and blurple edge on the left (Minecraft and Discord). */
.command-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.75rem 1.5rem;
  margin: 1rem 0 1.5rem;
  padding: 0.9rem 1.25rem calc(0.9rem + 2 * var(--t)) calc(1.25rem + 3 * var(--t));
  border: var(--t) solid var(--ore-outline);
  background:
    linear-gradient(var(--ore-green) 50%, #5865f2 50%) left / calc(3 * var(--t)) 100% no-repeat,
    var(--ore-dark);
  box-shadow: inset 0 calc(-2 * var(--t)) 0 var(--ore-deep);
}
dt {
  font-family: var(--ml-mojang);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ore-silver);
}
dd {
  margin: 0.2rem 0 0;
  font-weight: 500;
  color: #fff;
}
.more {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
