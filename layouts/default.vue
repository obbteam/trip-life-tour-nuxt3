<template>
  <div>
    <MyNav />
    <div>
      <slot />
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyNav from "../components/my-nav.vue";

import MyFooter from "../components/my-footer.vue";
export default {
  setup() {
    return {
      MyFooter,
      MyNav,
    };
  },
};
</script>

<style lang="scss" scoped></style>
