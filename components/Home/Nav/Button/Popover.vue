<template>
  <div class="flex justify-center absolute shadow shadow-lg transform transition-all duration-100 scale-0 p-1 group-hover:scale-100">
    <div
      class="absolute w-6 h-6 xl:w-8 xl:h-8 bg-bgSecondary transform rotate-45 bottom-[38px] xl:bottom-[66px]"
    ></div>
    <div
    v-html="hoveredText"
      class="absolute text-sm xl:text-lg bottom-[40px] xl:bottom-[70px] bg-bgSecondary text-main min-w-[100px] max-w-[200px] rounded-xl transform p-2"
    >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hoveredText: String,
});
</script>
