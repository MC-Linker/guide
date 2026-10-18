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
.label {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-mute);
}
.minecraft .label {
  font-family: var(--ml-pixel);
  letter-spacing: 0.03em;
}
</style>
