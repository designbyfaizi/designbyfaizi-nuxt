<template>
  <Head>
    <Title>Design By Faizi</Title>
    <Meta name="description" content="My amazing site" />
  </Head>
  <NuxtLayout name="main-layout">
    <!-- <div>
      <h1>Color Mode: {{ $colorMode }}</h1>
      <select class="bg-primary text-bg outline-transparent" name="" id="" v-model="$colorMode.preference">
        <option v-for="(colorMode, index) in colorModes" :value="colorMode">{{colorMode}}</option>
      </select>
    </div> -->
    <HomeHero />
  </NuxtLayout>
</template>

<script setup>
import colorModes from "~/public/data/colorModes"
useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style></style>
