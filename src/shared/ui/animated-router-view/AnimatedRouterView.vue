<template lang="html">
    <RouterView v-slot="{ Component }" >
        <div v-bind="$attrs" class="page-animation-container">
            <Transition
                :name="transitionName"> 
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

    defineOptions({
        inheritAttrs: false
    })

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

</script>

<style>
    :root{
        --page-transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
    }

    .page-animation-container{
        display: flex;
        flex-direction: column;
        position: relative;
    }

    html{
        overflow-x: hidden;
    }

    .left-enter-active, .right-enter-active,
    .left-leave-active, .right-leave-active {
        position: absolute;
        transition: var(--page-transition);
        width: 100%;
    }

    .left-enter-from, .right-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }    

    .left-leave-to{
        transform: translate(-100%);
        opacity: 0;
    }

    .right-enter-from {
        transform: translateX(-100%);
        opacity: 1;
    }
</style>