<template>
<div class="min-h-screen flex flex-col">
  <HomeHeader />
  <main class="container mx-auto max-w-[90%] xl:max-w-screen-lg h-full my-auto transform translate-y-[-4rem]">
    <slot />
  </main>
  <HomeNav />

</div>
</template>
