<script setup lang="ts">
  import { AnimatedRouterView, WidthWrapper } from '@/shared/ui';
  import { PageTemplate } from '@/widgets';
  import { onBeforeMount } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'

  onBeforeMount(() => {
    document.body.setAttribute("data-theme", "dark")
  })
</script>

<template>
  <Suspense>
    <PageTemplate/>
  </Suspense>
</template>

<style lang="css">
  @import url("./styles.css");
</style>
