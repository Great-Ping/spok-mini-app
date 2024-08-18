<script setup lang="ts">
    import { OpenFullAccessButton } from '@/feauters/open-full-access';
    import { CenteringOverflowContainer, FlatButton } from '@/shared/ui';

    let model : IOpenFullAccessModel = {
        description: "Открой полный доступ ко всему контенту в приложении. Засыпай быстрее и улучши качество своего сна вместе со SPOK",
        headerText: "Теперь можно все",
        fullPrice: " 249 RUB",
        discountPrice: "125 RUB",
        openAccessButtonText: "Открыть полный доступ",
    }
    
    let images = [
        {
            url: "/images/open-full-access/img2.png",
            class: "secondary-image"
        },
        {
            url: "/images/open-full-access/img1.png",
            class: "main-image"
        },
        {
            url: "/images/open-full-access/img3.png",
            class: "secondary-image"
        },
    ]
</script>


<template>
    <div class="open-full-access"> 
        <h1 class="open-full-access__header">
            {{model.headerText}}
        </h1>
        <span class="open-full-access__description external-margin">
            {{model.description}}
        </span>
        <CenteringOverflowContainer class="open-full-access__images">
            <img 
                v-for="image in images" 
                class="open-full-access__image"
                :src="image.url"
                :class="image.class"
            />
        </CenteringOverflowContainer>
        <div class="open-full-access__prices">
            <span class="open-full-access__full-price">
                <div class="through"></div>
                    {{model.fullPrice}}
            </span> 
            <span class="open-full-access__discount-price">
                {{ model.discountPrice }}
            </span>
            <span class="open-full-access__full-price hidden">
                <div class="through"></div>
                    {{model.fullPrice}}
            </span> 
        </div>
        <OpenFullAccessButton> 
            {{model.openAccessButtonText}}
        </OpenFullAccessButton>
    </div>
</template>

<style>
    @import url("./styles.css");
</style>