<script lang="ts" setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import { SheepCounterCanvasView } from '../models/view';
    import { WidthWrapper } from '@/shared/ui';

    let props = defineProps<{
        scale?: number
    }>()

    let canvasRef = ref<HTMLCanvasElement | null>(null);
    let canvasView: SheepCounterCanvasView | undefined;
    let fontFace = new FontFace("OpenSans", "url()")
    
    let canvasSize = {
        width: 0,
        height: 0
    }

    function resizeCanvas(canvas: HTMLCanvasElement){
        let scale = props.scale ?? 1
        canvas.height = canvas.offsetHeight * scale
        canvas.width =  canvas.offsetWidth * scale
    }
    
    function resizeView(
        canvas: HTMLCanvasElement, 
        canvasView: SheepCounterCanvasView
    ){  
        if ( canvas.offsetWidth == canvasSize.width ){
            return;
        }

        if ( canvas.offsetHeight == canvasSize.height){
            return;
        }
        
        canvasSize = {
            height: canvas.offsetHeight,
            width: canvas.offsetWidth
        }

        resizeCanvas(canvas)
        canvasView.resize(canvas.width, canvas.height)
        canvasView.draw()
    }

    onMounted(()=> {
        let canvas = canvasRef.value;
        let context = canvas?.getContext("2d")

        if (canvas == null || context == null)
            return;
    
        let canvasView = new SheepCounterCanvasView(context)
        canvas.addEventListener("click", (event) => {
            canvasView.increment()
            event.stopPropagation()
            event.preventDefault()
        })
        
        canvas.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            event.stopPropagation();
            return false
        })
        
        window.addEventListener("resize", () => {
            resizeView(canvas, canvasView)
        })

        resizeView(canvas, canvasView)
    })

</script>

<template>
    <canvas 
        ref="canvasRef" 
        class="sheep-counter-canvas"/>
</template>

<style lang="css" scoped>
@import url("./styles.css");
</style>