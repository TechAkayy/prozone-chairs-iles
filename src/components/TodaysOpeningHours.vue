<script setup lang="ts">
  const { weekDays, todaysOpeningHours } = useOpeningHours()
</script>
<template>
  <details class="dropdown">
    <summary class="m-1">
      <span class="text-white">{{ todaysOpeningHours }}</span>
    </summary>
    <div class="bg-base-100 dropdown-content p-4 rounded-box shadow w-52 z-[1]">
      <AllOpeningHours :week-days="weekDays" />
    </div>
  </details>
</template>
<style scoped></style>
