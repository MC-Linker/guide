<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import OreLinks from '../components/OreLinks.vue';
</script>

<!-- The default layout, plus mclinker.com's "Links" dropdown in the header (the sidebar on phones). -->
<template>
  <ParentLayout>
    <template #navbar-after><OreLinks class="vp-hide-mobile" /></template>
    <template #sidebar-top><OreLinks list class="ml-hide-wide" /></template>
  </ParentLayout>
</template>
