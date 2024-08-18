<script lang="ts" setup>
    import { FlatButton } from '@/shared/ui';
</script>

<template>
    <FlatButton class="open-full-access-button">
        <slot></slot>
    </FlatButton>
</template>

<style>
    .open-full-access-button{
        width: 100%;
        max-width: 300px; 
        margin: 0 auto; 
    }
</style>