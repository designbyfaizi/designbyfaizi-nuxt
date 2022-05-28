<template>
  <Head>
    <Title>Design By Faizi</Title>
    <Meta name="description" content="My amazing site" />
  </Head>
  <NuxtLayout name="main-layout">
    <HomeHero />
  </NuxtLayout>
</template>

<script setup>
useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style></style>
