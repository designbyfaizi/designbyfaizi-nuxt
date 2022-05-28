<template lang="">
  <header
    :class="`h-[160px] flex items-center sticky top-0 backdrop-filter ${x>160 && 'backdrop-blur-xl h-[100px]'}`"
  >
    <nav class="container mx-auto max-w-screen-xl">
      <img
        src="/icon.svg"
        alt="Design by Faizi"
        class="select-none mr-auto cursor-pointer hover:(transform scale-95)"
      />
    </nav>
  </header>
</template>

<script setup>
const { x, y } = useWindowScroll();
console.log("Scroll", x.value);
</script>
