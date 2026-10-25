<script lang="ts" setup>
const scrollY = ref(0);
const isHidden = ref(false);

let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }

  scrollY.value = currentScrollY;
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="header flex items-center px-3"
    :class="{
      'header--scrolled': scrollY > 50,
      'header--hidden': isHidden,
    }"
  >
    <div
      class="flex h-16 items-center justify- w-full gap-6 mx-auto px-4 sm:px-6 lg:px-8 text-default"
      :class="{ 'bg-default': scrollY > 50 }"
    >
      <a href="#top" class="leading-[1.1] flex items-end gap-1.5 select-none">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 336.000000 500.000000"
          preserveAspectRatio="xMidYMid meet"
          class="h-7 fill-current"
        >
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M1011 4462 c-853 -1771 -943 -1965 -965 -2059 -68 -300 66 -628 323
-788 37 -23 500 -245 699 -335 l62 -29 59 122 c32 67 164 343 293 612 485
1011 1008 2111 1008 2120 0 2 -120 86 -267 186 -148 100 -424 290 -615 421
-190 131 -350 238 -355 238 -4 0 -114 -219 -242 -488z"
            />
            <path
              d="M2189 3031 c-40 -75 -389 -767 -776 -1538 l-705 -1403 32 0 c28 0
824 102 1535 196 110 14 205 31 212 38 13 12 641 1260 746 1481 81 171 103
265 94 400 -8 120 -28 191 -83 303 -54 111 -142 210 -242 274 -37 23 -219 119
-405 213 l-337 172 -71 -136z"
            />
          </g>
        </svg>

        <div class="font-notch font-semibold leading-[1.1] text-2xl">
          Opensya
        </div>
      </a>

      <div class="flex items-center gap-2 ml-auto">
        <UButton href="#contact" class="max-sm:hidden rounded-4xl">
          contact
        </UButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s ease;
  z-index: 1000;
}

/* Masque le header quand on scrolle vers le bas */
.header--hidden {
  transform: translateY(-100%);
}
</style>
