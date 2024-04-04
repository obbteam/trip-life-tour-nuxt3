<template>
  <div>
    <NavWhite />
    <div>
      <slot />
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
import NavWhite from "../components/nav-white.vue";
export default {
  setup() {
    return {
      MyFooter,
      NavWhite,
    };
  },
};
</script>

<style lang="scss" scoped></style>
