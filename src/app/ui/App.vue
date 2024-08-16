<script setup lang="ts">
    import { AnimatedRouterView, WidthWrapper } from '@/shared/ui';
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <WidthWrapper class="full-height">
    <Suspense>
      <AnimatedRouterView class="full-height"/>
    </Suspense>
  </WidthWrapper>
</template>

<style lang="css">
  @import url("./styles.css");
</style>
