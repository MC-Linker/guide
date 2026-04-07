<template>
  <RouterLink to="/guide/core/permissions.html" class="default-badge-wrapper" >
    <Badge type="tip" text="default" />
    <span class="default-badge-tooltip">
      This is the default permission. You can configure it via Discord's Integrations menu.
    </span>
  </RouterLink>
</template>

<style scoped>
.default-badge-wrapper {
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.default-badge-tooltip {
  display: none;
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-style: normal;
  line-height: 1.4;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text);
  box-shadow: 0 4px 12px var(--vp-c-shadow);
  white-space: normal;
  z-index: 100;
  pointer-events: none;
}

.default-badge-wrapper:hover .default-badge-tooltip {
  display: block;
}
</style>
