<script lang="ts" setup>
    let props = defineProps<{
        isVisible: boolean
    }>()

    let className = "modal-window";
    
    if (!props.isVisible)
        className += " hidden"

</script>

<template>
    <div :class="className">        
        <slot></slot>
    </div>
</template>

<style scoped>
@import url("./styles.css");
</style>