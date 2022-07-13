<template>
  <Head>
    <Title>Projects</Title>
    <Meta name="description" content="My amazing site" />
  </Head>
  <NuxtLayout name="main-layout">
    <h1>Projects</h1>
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
