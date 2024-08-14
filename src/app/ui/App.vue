<script setup lang="ts">
import { AnimatedRouterView, WidthWrapper } from '@/shared/ui';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <WidthWrapper height="100%">
    <AnimatedRouterView/>
  </WidthWrapper>
</template>

<style lang="css">
  @import url("./styles.css");
</style>
