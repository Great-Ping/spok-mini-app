<script setup lang="ts">
import { type ITopic } from '@/entities/topic';
    let props = defineProps<{
        topic: ITopic
    }>()
    
    let imageUrl = URL.createObjectURL(props.topic.image);
</script>

<template>
    <div>
        <span> {{topic.title}} </span> 
        <span> {{topic.description}} </span>
        <img :src="imageUrl" /> 
    </div>
</template>