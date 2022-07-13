<!-- @ts-nocheck -->
<template>
  <div class="fixed bottom-10 mx-auto w-full flex select-none">
    <nav
      class="bg-bgSecondary border-neutral-700 border-[1px] w-fit max-w-[90%] h-[64px] rounded-2xl gap-[3px] sm:(max-w-[80%] h-[80px] rounded-2xl gap-3) xl:(max-w-screen-lg h-[128px] rounded-3xl gap-6) mx-auto flex items-center justify-center px-[62px] shadow shadow-xl shadow-shadow"
    >
      <HomeNavButton
        icon-src="/img/general/homeIconLight.svg"
        icon-name="Home"
        :active="route.path == '/'"
        hovered-text="Home"
        :href="{
          to:'/',
          label:'/Home'
        }"
      />
      <HomeNavButton
        icon-src="/img/general/bulbIconLight.svg"
        icon-name="Projects"
        :active="route.path == '/projects'"
        hovered-text="Projects"
        
      />
      <HomeNavButton
        icon-src="/img/general/aboutIconLight.svg"
        icon-name="About"
        hovered-text="About Me"
      />
      <HomeNavButton
        icon-src="/img/general/mailIconLight.svg"
        icon-name="Contact"
        hovered-text="Contact"
      />
      <HomeNavButton
        icon-src="/img/general/calendarIconLight.svg"
        icon-name="Work Experience"
        hovered-text="Work Experience"
      />
      <HomeNavButton
        icon-src="/img/general/twitterIconLight.svg"
        icon-name="Social"
        hovered-text="Social"
      />
      <HomeNavButton
        icon-src="/img/general/behanceIconLight.svg"
        icon-name="Behance"
        hovered-text="Behance"
      />
      <HomeNavButton
        icon-src="/img/general/dribbleIconLight.svg"
        icon-name="Dribble"
        hovered-text="Dribble"
      />
      <HomeNavDivider />
      <HomeNavButton
        icon-src="/img/general/moonIcon.svg"
        icon-name="Dark Mode"
        :hovered-text="`Color Mode: <span class='bg-main text-sm !text-bgSecondary px-2 py-1 rounded-full transition-all duration-75 hover:(cursor-pointer bg-primary)'>${colorMode.preference}</span>`"
        :onClick="changeTheme"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import colorModes from "~/public/data/colorModes";
const colorMode = useColorMode();
const route = useRoute();

const changeTheme = () => {
  console.log({ colorMode: colorMode.preference, colorModes });
  for (let i = 0; i < colorModes.length; i++) {
    if (colorMode.preference !== colorModes[i]) {
    } else if (colorMode.preference !== colorModes[colorModes.length - 1]) {
      return (colorMode.preference = colorModes[i + 1]);
    } else {
      return (colorMode.preference = colorModes[0]);
    }
  }
};
</script>
