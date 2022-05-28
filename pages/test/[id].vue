<template>
  <Head>
    <Title>{{$route.params.id}}</Title>
  </Head>
  <NuxtLayout name="main">
    <main
      class="container mx-auto max-w-screen-xl flex flex-col justify-center items-center min-h-screen h-full gap-8"
    >
      {{$route.params.id}}
    </main>
  </NuxtLayout>
</template>