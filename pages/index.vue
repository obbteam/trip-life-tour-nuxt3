<template>
  <div>
    <div class="mx-8 flex flex-col gap-20">
      <MyHeader />
      <PlanTrip />
      <UzbWorld />
      <Reviews />
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/my-header.vue";
import PlanTrip from "../components/plan-trip.vue";
import UzbWorld from "../components/uzb-world.vue";
import Reviews from "../components/reviews.vue";

export default {
  setup() {
    return {};
  },
  components: { MyHeader, PlanTrip, UzbWorld, Reviews, },
};
</script>

<style lang="scss" scoped></style>
