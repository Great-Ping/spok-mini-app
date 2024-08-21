<script lang="ts" setup>
import { FlatButton, BetaLabel, Title } from '@/shared/ui';
import { SheepCounterStartButton } from '@/feauters/sheep-counter/';
</script>

<template>
    <article class="sheep-counter-category">
      <Title>
        Счетчик овечек
        <BetaLabel/>
      </Title>
      <div class="sheep-counter-category__container">
        <img class="sheep-counter-category__image" src="/images/sheep-counter/sheep.png"/>
        <SheepCounterStartButton>
            Начать
        </SheepCounterStartButton>
      </div>
    </article> 
</template>

<style>
@import url("./styles.css");
</style>