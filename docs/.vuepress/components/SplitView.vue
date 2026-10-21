<script setup>
/**
 * Shows what happens on each side, like the two halves of mclinker.com.
 *
 * <SplitView>
 *   <template #discord>…</template>
 *   <template #minecraft>…</template>
 * </SplitView>
 */
</script>

<template>
  <div class="split">
    <section class="side discord">
      <p class="label">In Discord</p>
      <slot name="discord" />
    </section>
    <section class="side minecraft">
      <p class="label">In Minecraft</p>
      <slot name="minecraft" />
    </section>
  </div>
</template>

<style scoped>
.split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.side {
  min-width: 0;
}
.side :deep(discord-messages),
.side :deep(.mc-chat) {
  margin-top: 0.4rem;
}
/* A small Ore tag over each side. */
.label {
  display: inline-block;
  margin: 0;
  padding: 0.15rem 0.45rem 0.2rem;
  border: var(--t) solid var(--ore-outline);
  background: #5865f2;
  color: #fff;
  font-family: var(--ml-pixel);
  font-size: 0.8rem;
  line-height: 1.2;
}
.minecraft .label {
  background: var(--ore-green);
}
</style>
