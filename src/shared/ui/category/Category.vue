<template>
    <article>
        <div class="category-title" :style="titleStyle"> 
            {{title}}
        </div>    
        <slot></slot>
    </article>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string,
        titleSize?: Number,
        titleWidth?: Number
    }>()

    let titleStyle = ""
    if (props.titleSize != null){    
        titleStyle += `font-size: ${props.titleSize}`
    }
    if (props.titleWidth != null){    
        titleStyle += `font-size: ${props.titleWidth}`
    }
</script>

<style>
@import url(./styles.css);
</style>