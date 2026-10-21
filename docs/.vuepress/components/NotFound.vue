<script setup>
import { RouteLink, useRoute } from 'vuepress/client';

// Like mclinker.com's error page: the game's death screen. Respawn goes to the guide's home.
const route = useRoute();
</script>

<template>
  <main class="ml-died">
    <h1>You died!</h1>
    <p class="ml-died-cause"><code>{{ route.path }}</code> fell out of the world</p>
    <p class="ml-died-score">Score: <span>404</span></p>
    <div class="ml-died-buttons">
      <RouteLink to="/" class="ml-died-button respawn">Respawn</RouteLink>
      <RouteLink to="/guide/" class="ml-died-button">Open the guide</RouteLink>
    </div>
  </main>
</template>
