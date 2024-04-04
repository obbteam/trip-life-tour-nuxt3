<template>
  <div class="flex flex-col gap-20">
    <TourHero />
    <FallTravel />
    <FallSection /> 
    <UzbWorld class="mb-10"> </UzbWorld>
    <!-- <TourList /> -->
  </div>
</template>

<script>
import TourHero from "@/components/tours-page/tour-hero.vue";
import TourList from "@/components/tours-page/tour-list.vue";
import UzbWorld from "@/components/uzb-world.vue";
import FallTravel from "@/components/tours-page/fall-travel.vue";
import FallSection from "@/components/tours-page/fall-section.vue";
export default {
  setup() {
    definePageMeta({
      layout: "tours-layout",
    });
    return {};
  },
  components: {
    TourHero,
    TourList,
    UzbWorld,
    FallTravel,
    FallSection,
  },
};
</script>

<style lang="scss" scoped></style>
