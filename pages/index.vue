<template>
  <Head>
    <Title></Title>
  </Head>
  <NuxtLayout name="main">
    <main
      class="container mx-auto max-w-screen-xl flex flex-col justify-center items-center min-h-screen h-full gap-8"
    >
      <HomeHero />
    </main>
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: "Design By Faizi",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<style></style>
