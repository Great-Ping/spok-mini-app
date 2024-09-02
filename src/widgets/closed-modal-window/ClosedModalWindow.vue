<script lang="ts" setup>
    import {
        ModalWindow, 
        CloseButton,
        WidthWrapper
    } from "@/shared/ui"

    defineProps<{
        isShown: boolean
    }>()

    const emit = defineEmits<{
        (e: 'closeRequested'): void
    }>()

</script>

<template>
    <ModalWindow v-if="isShown">
        <WidthWrapper class="modal-window__container">
            <CloseButton @click="$emit('closeRequested')"/>
            <slot></slot>    
        </WidthWrapper>
    </ModalWindow>
</template>

<style scoped>
@import url("./styles.css");
</style>