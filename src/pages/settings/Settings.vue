<script setup lang="ts">
import { PageHeader } from '@/shared/ui';
import { ReferenceParameter, ToggleParameter } from '@/shared/ui/parameters';
import { 
  DeleteIcon,
  NotificationsIcon,
  ChatIcon,
  ExitIcon,
  StarIcon 
} from '@/shared/svg';

let header = "Настройки"

</script>

<template>
  <main class="settings">
    <PageHeader style="text-align: center;">{{ header }}</PageHeader>
    <ToggleParameter :icon="NotificationsIcon" name="Уведомления" onchange=""/>
    <ReferenceParameter :icon="StarIcon" name="Оценить приложение" reference=""/>
    <ReferenceParameter :icon="ChatIcon" name="Связь с разработчиком" reference=""/>
    <ReferenceParameter :icon="ExitIcon" name="Выйти аккаунта" reference=""/>
    <ReferenceParameter :icon="DeleteIcon" name="Удалить аккаунт" reference=""/>
  </main>
</template>


<style lang="css" scoped>
  /* @import url("./styles.css"); */
</style>