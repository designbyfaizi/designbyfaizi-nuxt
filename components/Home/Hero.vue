<template>
  <section class="min-h-[600px] flex flex-col justify-center gap-8">
    <div class="mainHeading text-[64px] font-bold">
      <h1>Hello!👋🏻</h1>
      <h2>My name is Faizi</h2>
      <h2 class="">I am a Web <span class="">Developer</span></h2>
      <div class="w-[100px] h-[100px] bg-gradient-to-r from-rose-500 to-rose-800"></div>
      <!-- <div class="from-rose-500 via-rose-600 to-rose-800 bg-gradient-to-r w-[100px] h-[100px] bg-opacity-100"></div> -->
    </div>
    <h6 class="font-normal text-[24px]">
      Let me help you grow your business and make your site look pretty while at
      it
    </h6>
    <button class="bg-rose-600 max-w-[200px] p-2 rounded-lg hover:(bg-rose-700)" @click="print()">Say Hello</button>
  </section>
</template>

<script setup>
const print = () => {
  console.log("Clicked!")
}

</script>
