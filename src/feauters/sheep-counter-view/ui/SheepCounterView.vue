<script lang="ts" setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import { SheepCounterView } from '../models/view';
    import { WidthWrapper } from '@/shared/ui';

    let canvasRef = ref<HTMLCanvasElement | null>(null);
    let canvasView: SheepCounterView | undefined;
    
    function drawSheepCounter(canvas: HTMLCanvasElement, view: SheepCounterView)
    {
        let context = canvas.getContext("2d");

        if (context == null)
            throw new Error("Canvas context is Null")

        view.sheeps.forEach((sheep) => {
            // context.save();
            context.translate(
                sheep.position.x,
                sheep.position.y
            );
            context.rotate(sheep.position.deg);
            
            context.drawImage(
                sheep.image, 
                - sheep.size.widht / 2, 
                - sheep.size.height / 2,
                sheep.size.widht, 
                sheep.size.height
            )
            
            context.rotate(-sheep.position.deg);
            context.translate(
                sheep.position.x,
                sheep.position.y
            );
        })
        
        
        view.numbers.forEach((number) => {
            context.font = `${number.fontSize}px Open Sans`
            context.fillText(number.text, number.position.x, number.position.y);
        })
        
        let canBeNullStrings = [view.description, view.title];
        canBeNullStrings.forEach((text) => {
            if (text == null)
            return;
        
        context.font = `${text.fontSize}px Open Sans`
        context.fillText(text.text, text.position.x, text.position.y);
    })
}

    onMounted(()=> {
        let canvas = canvasRef.value;

        if (canvas == null)
            return;
    
        let onStateChanged = (newState: SheepCounterView) => {
            drawSheepCounter(canvas, newState)
        }

        canvasView = new SheepCounterView(onStateChanged)
        canvas.addEventListener("click", () => canvasView?.increment())
        
        drawSheepCounter(canvas, canvasView);
    })

</script>

<template>
    <WidthWrapper class="full-height">
        <canvas 
            ref="canvasRef" 
            class="sheep-counter-canvas"/>
    </WidthWrapper>
</template>

<style lang="css" scoped>
@import url("./styles.css");
</style>