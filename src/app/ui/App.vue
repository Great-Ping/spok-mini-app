<script setup lang="ts">
  import { PageTemplate } from '@/widgets/page-template';
  import { onBeforeMount } from 'vue';
  
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
