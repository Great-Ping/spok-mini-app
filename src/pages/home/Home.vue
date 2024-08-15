<script setup lang="ts">
  import { inject } from 'vue';
  import type { ISpokClient } from '@/entities/api';
  import { Category } from '@/shared/ui';
  import  { PageTemplate } from '@/widgets';
  import { TopicsList } from '@/widgets/topics-list';

  let spokClient = inject("spokClient") as ISpokClient
  let categories = [
    {
      title: "SPOK.COH",
      titleStyle:  `font-size: 1.8em;margin-bottom: 30px;`,
      topics: await spokClient.getTopicsAsync(20, 0),
    },
    {
      title: "Засыпайки",
      topics: await spokClient.getTopicsAsync(20, 20),
      useShort: true
    },    {
      title: "Истории на ночь",
      topics: await spokClient.getTopicsAsync(20, 40)
    },
  ]

</script>

<template>
  <PageTemplate class="home">
    <Category 
      v-for="category in categories" 
      :title="category.title" 
      :title-style="category.titleStyle"
      >
      <TopicsList :use-short-topics="category.useShort" :topics="category.topics" />
    </Category> 
  </PageTemplate>
</template>

<style lang="css">
  @import url("./styles.css");
</style>