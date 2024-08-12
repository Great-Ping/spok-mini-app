<script setup lang="ts">
import { AnimatedRouterView } from '@/shared/ui';
import { RouterLink, RouterView } from 'vue-router'
import { Routes } from '@/entities';
</script>

<template> 
  <AnimatedRouterView/>
  <nav>
    <RouterLink :to="Routes.Home">Home</RouterLink>
    <RouterLink :to="Routes.Settings">settings</RouterLink>
  </nav>  
</template>

<style lang="css">
  @import url("./reset.css");
  @import url("./styles.css");
  @import url("./dark-theme.css");
</style>
