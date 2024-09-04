<script lang="ts" setup>
import { FlatButton, BetaLabel, Title } from '@/shared/ui';
import { SheepCounterStartButton } from '@/feauters/sheep-counter-start-button';
import { SheepCounterView } from '@/feauters/sheep-counter-view';
import { ref } from 'vue';
import { ClosedModalWindow } from '@/widgets/closed-modal-window';

let modalIsShown = ref(false)

function onModalOpenRequested(){
  modalIsShown.value = true 
}

function onModalCloseRequested(){
  modalIsShown.value = false;
}

</script>

<template>
    <article class="sheep-counter-category">
      <ClosedModalWindow 
        :isShown="modalIsShown"
        @closeRequested="onModalCloseRequested">
        <SheepCounterView :scale="3" />
      </ClosedModalWindow>
      <Title>
        Счетчик овечек
        <BetaLabel/>
      </Title>
      <div class="sheep-counter-category__container">
        <img class="sheep-counter-category__image" src="/images/sheep-counter/sheep.png"/>
        <SheepCounterStartButton :onclick="onModalOpenRequested">
            Начать
        </SheepCounterStartButton>
      </div>
    </article> 
</template>

<style>
@import url("./styles.css");
</style>