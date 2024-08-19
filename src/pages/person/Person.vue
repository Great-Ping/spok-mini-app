<script lang="ts" setup>
    import { PageHeader } from '@/shared/ui';
    import { OpenFullAccess } from '@/widgets/open-full-access';
    import { LeaveFeedback } from '@/widgets/leave-feedback';
</script>

<template>
    <main class="person full-height">
        <PageHeader class="external-margin">Профиль</PageHeader>
        <OpenFullAccess/>
        <LeaveFeedback/>
    </main>
</template>

<style>
@import url("./styles.css");
</style>