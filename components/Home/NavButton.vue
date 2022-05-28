<template>
  <div
    :class="`navItem flex justify-center items-center w-[80px] h-[80px] rounded-[16px] bg-neutral-700 transform transition-all duration-75 cursor-pointer ${active && 'bg-rose-600 scale-130'} hover:(bg-rose-600 scale-110)`"
  >
    <img :src="iconSrc" :alt="iconName" class="w-[56px] h-[56px]" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconSrc: String,
  iconName: String,
  active: Boolean,
});
</script>

<style scoped></style>
