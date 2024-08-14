<script setup lang="ts">
    import { Routes } from '@/entities';
</script>

<template>
  <nav>
    <RouterLink :to="Routes.Home">Home</RouterLink>
    <RouterLink :to="Routes.Settings">settings</RouterLink>
  </nav>  
</template>
