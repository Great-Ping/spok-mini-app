<script setup lang="ts">
import { type ITopic } from '@/entities/topic';
    let props = defineProps<{
        topic: ITopic
        isShort?: boolean
    }>()
    
    let topicClass = "topic"
    if (props.isShort){
        topicClass = "topic short"
    }

    let imageUrl = URL.createObjectURL(props.topic.image);
</script>

<template>
    <div :class="topicClass ">
        <div class="topic__text">
            <span class="topic__title"> {{topic.title}} </span> 
            <span class="topic__description"> {{topic.description}} </span>
        </div>
        <img class="topic__image" :src="imageUrl" /> 
    </div>
</template>

<style scoped>
@import url("./style.css");
</style>