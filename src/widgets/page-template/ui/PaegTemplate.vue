<script setup lang="ts">
    import { NavigationBar } from "@/widgets"
</script>

<template>
    <div class="page">
      <main class="page-content">
        <slot></slot>
      </main>
      <NavigationBar/>
    </div>
</template>
  
<style>
@import url("./styles.css");
</style>