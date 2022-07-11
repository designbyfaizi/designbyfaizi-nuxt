<template>
  <section class="flex flex-col justify-center transform gap-8 xl:gap-16">
    <div class="mainHeading text-[28px] xl:text-[64px] font-bold">
      <h1>Hello!👋🏻</h1>
      <h2>My name is Faizi</h2>
      <h2 class="">I am a Web <span class="gradient-text">Developer</span></h2>
      <!-- <div
        class="w-[100px] h-[100px] bg-gradient-to-r from-rose-500 to-rose-800"
      ></div> -->
    </div>
    <h6 class="font-light text-[16px] xl:text-[24px]">
      Let me help you grow your business and make your website look pretty while at
      it
    </h6>
    <button
      class="bg-primary text-white max-w-[200px] p-2 rounded-lg hover:(bg-secondary)"
      @click="print()"
    >
      Say Hello
    </button>
  </section>
</template>

<script setup>
const print = () => {
  console.log("Clicked!");
};
</script>
