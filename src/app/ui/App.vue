<script setup lang="ts">
    import { AnimatedRouterView, WidthWrapper } from '@/shared/ui';
    import { PageTemplate } from '@/widgets';
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <PageTemplate/>
  </Suspense>
</template>

<style lang="css">
  @import url("./styles.css");
</style>
