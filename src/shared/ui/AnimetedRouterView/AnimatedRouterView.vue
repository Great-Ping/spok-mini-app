<template lang="html">
    <RouterView v-slot="{ Component }" >
        <Transition 
            @before-enter="beforeTransition"
            mode="in-out"
            :name="transitionName"
        > 
            <component :is="Component"/>
        </Transition>
    </RouterView>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { type IAnimationData } from './models/animationData';
    import { useRoute } from 'vue-router';
    import { SupportedTransition } from './models/SupportedTransition';

    let transitionName = ref(SupportedTransition.None)
    let route = useRoute();
    let previousRouteMeta = route.meta;

    function beforeTransition(){
        let currentData = route.meta as IAnimationData
        let previousData = previousRouteMeta as IAnimationData
        
        previousRouteMeta = route.meta;
        
        if (currentData.useAnimation !== true || previousData == null){
            transitionName.value = SupportedTransition.None
            return
        }
        
        if (currentData.pageIndex == null ||  previousData.pageIndex == null ){
            transitionName.value = SupportedTransition.None
            return
        }

        if (currentData.pageIndex < previousData.pageIndex){
            transitionName.value = SupportedTransition.Left
        }
        else {
            transitionName.value = SupportedTransition.Right
        }
    }
</script>

<style>
    .left-enter-from {
        position: fixed;
    }
    
    .left-enter-active {
        transition: opacity 0.5s ease-out;
    }

    .left-leave-from, .left-enter-to {
        position: fixed;
    }

    .left-leave-active {
        transition: opacity 0.5s ease-in
    }

    .left-leave-to {
        display: none;
    }
</style>