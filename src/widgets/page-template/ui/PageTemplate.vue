<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { NavigationBar } from "@/widgets/navigation-bar"
  import type { IPageTemplateMeta } from "@/widgets/page-template";
  import { AnimatedRouterView, WidthWrapper } from "@/shared/ui";

  defineOptions( {
    inheritAttrs: false
  })

  const router = useRouter()  
  let meta = ref({} as IPageTemplateMeta);

  router.beforeEach((to, from, next) => {
    meta.value = to.meta as IPageTemplateMeta;
    next()
  })

</script>

<template>
  <WidthWrapper v-if="!meta.useFullWidth" class="full-height">
    <div class="page">
      <AnimatedRouterView  
        :container-attrs="{class: 'full-height page-content-wrapper'}"
        :component-attrs="{class: 'page-content'}"
        >
          <slot></slot>
      </AnimatedRouterView>
      <NavigationBar class="sticky" v-if="meta.useButtomNavigationBar"/>
    </div>
  </WidthWrapper>    
</template>
<style>
@import url("./styles.css");
</style>