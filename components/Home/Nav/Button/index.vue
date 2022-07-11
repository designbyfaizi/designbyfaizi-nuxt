<template>
  <div class="flex justify-center text-center group">
    <button
    @click="$emit('onClick')"
      :class="`navItem relative flex justify-center items-center w-[28px] h-[28px] rounded-lg sm:(w-[38px] h-[38px]) xl:(w-[80px] h-[80px] rounded-[16px]) bg-neutral-600 bg-opacity-70 transform transition-all duration-75 cursor-pointer ${
        active && '!bg-primary scale-110 hover:(bg-primary scale-100)'
      } hover:(bg-primary scale-110) active:(bg-secondary scale-100)`"
    >
      <img :src="iconSrc" :alt="iconName" class="w-[20px] h-[20px] xl:(w-[56px] h-[56px])" />
    </button>
    <HomeNavButtonPopover :hoveredText="hoveredText" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconSrc: String,
  iconName: String,
  active: Boolean,
  hoveredText: String
});

// const print = () => {
//   window.alert("Clicked");
// };
</script>

<style scoped></style>
