<script setup lang="ts">
  import type { ISpokClient } from '@/entities/api/spok-client';
  import { Category } from '@/shared/ui';
  import  { PageTemplate } from '@/widgets';
  import { TopicsList } from '@/widgets/topics-list';
  import { inject } from 'vue';

  let spokClient = inject("spokClient") as ISpokClient
  let topics = await spokClient.getTopicsAsync()
  console.log(topics)
</script>

<template>
  <PageTemplate class="home-page">
    <Category title="SPOK.СОН">
      <TopicsList :topics="topics" />
    </Category> 
  </PageTemplate>
</template>

<style lang="css" scoped>
  @import url("./styles.css");
</style>