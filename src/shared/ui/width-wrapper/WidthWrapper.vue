<template>
    <div class="width-wrapper" :style=wrapperStyle>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    let props = defineProps<{
        maxWidth?: string,
        height?: string,
    }>()

    let wrapperStyle: string | undefined = "";  
    
    if (props.maxWidth != null){
        wrapperStyle += `max-width: ${props.maxWidth};`
    }

    if (props.height != null){
        wrapperStyle += `height: ${props.height}`
    }

    if (wrapperStyle == ""){
        wrapperStyle = undefined
    }
</script>

<style>
    .width-wrapper {
        max-width: 800px;
        margin: 0 auto;
    }
</style>