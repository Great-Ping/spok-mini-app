<script setup lang="ts">
import { classicNameResolver } from 'typescript';
import { isVNode } from 'vue';

    const props = defineProps<{
        title: string,
    }>()
</script>

<template>
    <article class="category">
        <div class="category__title"> 
            <span class="category__title__text">
                {{title}}
            </span>
        </div>    
        <slot></slot>
    </article>
</template>


<style>
@import url(./styles.css);
</style>