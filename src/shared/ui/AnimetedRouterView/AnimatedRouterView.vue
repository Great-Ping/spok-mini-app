<template lang="html">
    <RouterView v-slot="{ Component }" >
        <div class="page-animation-container">
            <Transition 
                v-if="transitionName!= SupportedTransition.None"
                @before-enter="beforeTransition"
                :name="transitionName"
            > 
                <component :is="Component"/>
            </Transition>
        </div>
    </RouterView>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { type IAnimationData } from './models/animationData';
    import { useRoute } from 'vue-router';
    import { SupportedTransition } from './models/supportedTransition';

    let transitionName = ref(SupportedTransition.None)
    let route = useRoute();
    let previousRouteMeta = route.meta;

    function beforeTransition(){
        let currentData = route.meta
        let previousData = previousRouteMeta
        
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
    :root{
        --page-transition: transform 400ms cubic-bezier(0.25, 1, 0.5, 1);
    }
    
    .page-animation-container{
        height: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        position: relative;
    }

    .left-enter-from {
        transform: translateX(100%);
    }
    
    .left-enter-active {
        position: absolute;
        transition: var(--page-transition);
        width: 100%;
    }

    .left-leave-active {
        transition: var(--page-transition);
        width: 100%;
    }

    .left-leave-to{
        transform: translate(-100%);
    }

    .right-enter-from {
        transform: translateX(-100%);
    }
    
    .right-enter-active {
        position: absolute;
        width: 100%;
        transition: var(--page-transition);
    }

    .right-leave-active {
        transition: var(--page-transition);
        width: 100%;
    }

    .right-leave-to{
        transform: translateX(100%);
    }
</style>