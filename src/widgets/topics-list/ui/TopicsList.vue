<script setup lang="ts">
    import { Topic } from '@/feauters/topic';
    import type { ITopic } from '@/entities/topic'; 
    import type { ICollection } from '@/shared/models/collections';

    let props = defineProps<{
        topics: ICollection<ITopic>,
        useShortTopics?: boolean
    }>()

</script>

<template>
    <li class="topics-list">
        <ul class="topics-list__item" v-for="topic in topics">
            <Topic :topic="topic" :isShort="useShortTopics"/>
        </ul>
    </li>
</template>

<style>
@import url("./style.css");
</style>