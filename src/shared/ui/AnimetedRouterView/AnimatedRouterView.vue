<template lang="html">
    <RouterView v-slot="{ Component }" >
        <div class="page-animation-container">
            <Transition :name="transitionName"> 
                <component :is="Component"/>
            </Transition>
        </div>
    </RouterView>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { type IAnimationData } from './models/animation-data';
    import { useRouter } from 'vue-router';
    import { SupportedTransition } from './models/supported-transition';

    let transitionName = ref(SupportedTransition.None)
    let router = useRouter();

    router.beforeEach((to, from, next) => {
        let currentData = to.meta as IAnimationData
        let previousData = from.meta as IAnimationData
        
        if (currentData.useAnimation !== true){
            transitionName.value = SupportedTransition.None
        }
        else if (currentData.pageIndex > previousData.pageIndex){
            transitionName.value = SupportedTransition.Left
        }
        else {
            transitionName.value = SupportedTransition.Right
        }
        next()
    })


    let savedData: IAnimationData = {
        pageIndex: -1,
        useAnimation: false
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