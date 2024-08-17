<script setup lang="ts">
    import { Routes } from '@/entities/routes';
    import { Settings, HomeIcon, PersonIcon } from '@/shared/svg';
    import type { Component } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const defaultColor = "#fff"
    const selectedColor = "#4F66E8" 
    const router = useRouter();

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

    router.afterEach((to, from, failure) =>{
      let currentRoute = navigationLinks.get(to.fullPath)
      if (currentRoute != null){
        currentRoute.fillColor = selectedColor
      }

      let previousRoute = navigationLinks.get(from.fullPath)
      if (previousRoute != null){
        previousRoute.fillColor = defaultColor;
      }
    })

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
  </nav>  
</template>


<style scoped>
@import url("./styles.css");
</style>