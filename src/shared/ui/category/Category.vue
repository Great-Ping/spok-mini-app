<template>
    <article class="category">
        <div class="category__title" :style="titleStyle"> 
            {{title}}
        </div>    
        <slot></slot>
    </article>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string,  
        titleStyle?: string
    }>()
</script>

<style>
@import url(./styles.css);
</style>