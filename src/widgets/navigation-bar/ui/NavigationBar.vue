<script setup lang="ts">
    import { Routes } from '@/entities/routes';
    import { Settings, HomeIcon, PersonIcon } from '@/shared/svg';
    import type { Component } from 'vue';
    import { useRoute } from 'vue-router';

    const defaultColor = "#fff"
    const selectedColor = "#4F66E8" 

    const route = useRoute()

    const navigationLinks = new Map<string, any>()
    
    navigationLinks.set(Routes.Home, {
      fillColor: defaultColor,
      icon: HomeIcon
    })
    navigationLinks.set(Routes.Person, {
      fillColor: defaultColor,
      icon: PersonIcon
    })
    navigationLinks.set(Routes.Settings, {
      fillColor: defaultColor,
      icon: Settings
    })

    const currentRoute = navigationLinks.get(route.fullPath)
    if (currentRoute != null){
      currentRoute.fillColor = selectedColor;
    }
</script>

<template>
  <nav class="navigation-bar">
    <RouterLink 
      v-for="link in navigationLinks"  
      class="navigation-bar__link" 
      :to="link[0]">

      <component 
        class="navigation-bar__icon" 
        :is="link[1].icon" 
        v-bind="{fillColor: link[1].fillColor}">
      </component>

    </RouterLink>

    <!-- <RouterLink class="navigation-bar__link" :to="Routes.Home">
      <HomeIcon class="navigation-bar__icon" :fill-color="defaultColor"/>
    </RouterLink>
    <RouterLink class="navigation-bar__link" :to="Routes.Person">
      <PersonIcon class="navigation-bar__icon" :fill-color="defaultColor"/>
    </RouterLink>
    <RouterLink class="navigation-bar__link" :to="Routes.Settings">
      <Settings class="navigation-bar__icon"fill-color="#fff"/>
    </RouterLink> -->
  </nav>  
</template>


<style scoped>
@import url("./styles.css");
</style>