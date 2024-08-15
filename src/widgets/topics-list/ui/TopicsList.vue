<script setup lang="ts">
    import { Topic } from '@/feauters/topic';
    import type { ITopic } from '@/entities/topic'; 
    let props = defineProps<{
        topics: ICollection<ITopic>
    }>()
</script>

<template>
    <div v-for="topic in topics">
        <Topic :topic="topic"/>
    </div>
</template>