<script lang="ts" setup>
import { FlatButton } from '@/shared/ui';
</script>

<template>
    <FlatButton class="leave-feedback-button">
        <slot></slot>
    </FlatButton>
</template>

<style>
.leave-feedback-button{
    width: 100%;
    max-width: 300px; 
    margin: 0 auto;  
}
</style>