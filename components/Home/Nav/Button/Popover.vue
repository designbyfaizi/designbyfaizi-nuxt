<template>
  <div
    class="absolute w-8 h-8 bg-bgSecondary transform rotate-45 bottom-[144px] shadow shadow-lg scale-0 group-hover:scale-100"
  ></div>
  <div
    class="absolute bottom-[150px] bg-bgSecondary text-main max-w-[200px] shadow shadow-lg rounded-xl transform p-2 scale-0 group-hover:scale-100"
  >
    {{ hoveredText }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hoveredText: String,
});
</script>
