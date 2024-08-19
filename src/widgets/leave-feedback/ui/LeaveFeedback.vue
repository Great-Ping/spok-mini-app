<script lang="ts" setup>
    import { LeaveFeedbackButton } from '@/feauters/leave-feedback'
    
    const model = {
        message: "Поделись своим впечатлением. Скажи, что тебе нравится и не нравится в приложении, а мы обещаем, что сделаем его лучше!",
        buttonText: "Поделиться впечатлением"
    }

</script>

<template>
    <div class="leave-feedback external-margin"> 
        <span style="white-space: pre-line" class="leave-feedback__message">
            {{ model.message }}
        </span>
        <LeaveFeedbackButton>{{ model.buttonText }}</LeaveFeedbackButton>
    </div>
</template>


<style>
@import url("./styles.css");
</style>