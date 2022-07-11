<template>
  <Head>
    <Title>Design By Faizi</Title>
    <Meta name="description" content="My amazing site" />
  </Head>
  <NuxtLayout name="main-layout">
    <div>
      <h1>Color Mode: {{ $colorMode }}</h1>
      <select name="" id="" v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
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
