<template>
  <div class="fixed bottom-10 mx-auto w-full flex select-none">
    <nav
      class="bg-bgSecondary border-neutral-700 border-[1px] w-fit h-[128px] mx-auto rounded-3xl flex items-center justify-center gap-8 px-[62px] shadow shadow-xl shadow-neutral-800"
    >
      <HomeNavButton
        icon-src="/img/general/homeIconLight.svg"
        icon-name="Home"
        active
        hovered-text="Home"
      />
      <HomeNavButton
        icon-src="/img/general/bulbIconLight.svg"
        icon-name="Projects"
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
        hovered-text="Color Mode"
      />
    </nav>
  </div>
</template>
