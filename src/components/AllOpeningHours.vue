<script setup lang="ts">
  const { weekDays } = useOpeningHours()
</script>
<template>
  <ul class="px-2 text-center">
    <li v-for="(weekDay, index) in weekDays" :key="index" class="py-1">
      <span :class="{ 'text-primary-600': new Date().getDay() === index }">{{
        weekDay
      }}</span>
    </li>
  </ul>
</template>
<style scoped></style>
