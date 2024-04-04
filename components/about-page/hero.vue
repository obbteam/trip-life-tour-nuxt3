<template>
  <div>
    <section class="bg-white">
      <div
        class="green container mx-auto grid px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-8"
      >
        <div class="mr-auto place-self-center lg:col-span-6">
          <h1
            class="tgb dark:green mb-10 max-w-2xl text-4xl leading-none md:text-5xl xl:text-6xl"
          >
            Welcome to <br />
            Trip Life Tour
          </h1>
          <p
            class="mm mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl"
          >
            Your Gateway to Global Adventures and Unforgettable Expeditions in
            Uzbekistan!
          </p>
          <a
            href="#"
            class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 green mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium focus:ring-4"
          >
            Get started
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <NuxtLink
            href="/tours"
            class="tile-btn"
          >
            Explore our tours
          </NuxtLink>
        </div>
        <div class="hidden lg:col-span-3 lg:mt-0 lg:flex justify-end relative -bottom-8 -right-16 items-end">
          <nuxt-img
            src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            class="h-96 rounded-3xl border-white border-8"
            loading="lazy"
          />
          
        </div>
        <div class="hidden lg:col-span-3 lg:mt-0 lg:flex justify-end">
          <nuxt-img
            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            class="w-full rounded-3xl"
            loading="lazy"
          />
          
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
