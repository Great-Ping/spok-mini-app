<script setup lang="ts">
  import { inject } from 'vue';
  import type { ISpokClient } from '@/entities/api';
  import { Category, PageHeader } from '@/shared/ui';
  import { TopicsList } from '@/widgets/topics-list';
  import { SheepCounterCategory } from '@/widgets/sheep-counter-category';

  let spokClient = inject("spokClient") as ISpokClient

  let pageHeader = "SPOK.СОН";
  let mainTopics = await spokClient.getTopicsAsync(20, 0)

  let categories = [
    {
      title: "Засыпайки",
      topics: await spokClient.getTopicsAsync(20, 20),
      useShort: true
    },    
    {
      title: "Истории на ночь",
      topics: await spokClient.getTopicsAsync(20, 40)
    }
  ]

  let lambCounter = {
    title: "Счетчик овечек"

  }

</script>

<template>
  <main class="home">
    <PageHeader class="external-margin">
      {{ pageHeader }}
    </PageHeader>
    <article>
      <TopicsList :topics="mainTopics"/>
    </article>

    <Category 
      v-for="category in categories" 
      :title="category.title"
      >
      <TopicsList :use-short-topics="category.useShort" :topics="category.topics" />
    </Category>
    
    <SheepCounterCategory/>
  </main>
</template>

<style lang="css">
  @import url("./styles.css");
</style>