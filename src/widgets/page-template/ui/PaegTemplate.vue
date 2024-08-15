<script setup lang="ts">
  import { NavigationBar } from "@/widgets"
  defineOptions( {
    inheritAttrs: false
  })
</script>

<template>
    <div class="page">
      <main class="page-content" v-bind="$attrs">
        <slot></slot>
      </main>
      <NavigationBar/>
    </div>
</template>
  
<style>
@import url("./styles.css");
</style>