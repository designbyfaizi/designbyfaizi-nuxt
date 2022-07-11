<template>
  <!-- <div class="bg-dark-mode bg-cover bg-repeat-y bg-fixed min-h-screen"> -->
  <body :class="`${$colorMode.value}-mode min-h-screen`">
    <NuxtPage />
  </body>
  <!-- </div> -->
</template>


<script setup>
// const colorMode = useColorMode()
</script>
