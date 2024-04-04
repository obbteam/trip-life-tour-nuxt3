<template>
  <div>
    <Hero />
    <Mission />
    <TextBlock />
  </div>
</template>

<script>
import Hero from "../components/about-page/hero.vue";
import Mission from "../components/about-page/mission.vue";
import TextBlock from "../components/about-page/text.vue";
export default {
  setup() {
    definePageMeta({
      layout: "tours-layout",
    });
    return {};
  },
  components: {
    Hero,
    Mission,
    TextBlock,
  },
};
</script>

<style lang="scss" scoped></style>
