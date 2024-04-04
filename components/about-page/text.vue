<template>
  <div>
    <section class="bg-white">
      <div
        class="green container mx-auto items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16"
      >
        <div>
          <div class="">
            <nuxt-img
              class="w-full rounded-3xl"
              src="https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80"
              alt="dashboard image"
              loading="lazy"
            />
          </div>
        </div>

        <div class="mt-4 md:mt-0">
          <h2 class="tgb mb-4 text-4xl font-extrabold tracking-tight">
            Craft Lasting Memories with <br />
            Trip Life Tour
          </h2>
          <p class="mb-6 font-light text-gray-950 md:text-lg">
            Discover a world of unforgettable experiences, cultural connections,
            and personalized journeys with us. Each moment is a page in your
            life's story, waiting to be written. Don't just take our word for it
            – visit our Reviews page and hear from those who have already
            embarked on their extraordinary adventures with Trip Life Tour.
          </p>
          <a
            href="#"
            class="green bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4"
          >
            Our reviews
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
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div
        class="container mx-auto items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16"
      >
        <div class="font-light text-gray-950 sm:text-lg">
          <h2 class="green tgb mb-4 text-4xl font-extrabold tracking-tight">
            Choose us
          </h2>
          <p class="mb-4">
            In choosing Trip Life Tour, you're not just selecting a travel
            agency – you're choosing a partner that's committed to making your
            travel dreams a reality, backed by remarkable statistics that
            showcase our dedication to excellence. Our passion, expertise, and
            commitment converge to create an unparalleled experience that will
            linger in your memory long after you return home. Elevate your
            journey with us and embark on an adventure that transcends
            boundaries, enriches your soul, and leaves you with a treasure trove
            of unforgettable moments.
          </p>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <nuxt-img
            class="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
            loading="lazy"
          />
          <nuxt-img
            class="mt-4 w-full rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
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
