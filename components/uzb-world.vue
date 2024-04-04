<template>
  <div
    class="uzb-world container mx-auto grid grid-cols-2 gap-6 text-center text-white"
  >
    <div class="left flex items-end rounded-2xl">
      <div class="layer2 flex flex-col items-center justify-end p-6">
        <h1 class="tgb mb-2 text-4xl">Flights</h1>
        <p>
          Search Flights & Places Hire to our most popular <br />
          destinations
        </p>

        <a href="" class="my-btn mt-4 flex gap-1"
          ><Icon name="cib:telegram-plane" class="h-5 w-5"></Icon> Show
          Filghts</a
        >
      </div>
    </div>
    <div class="right flex items-end rounded-2xl">
      <div class="layer2 flex flex-col items-center justify-end p-6">
        <h1 class="tgb mb-2 text-4xl">Hotels</h1>
        <p>
          Search hotels & Places Hire to our most popular <br />
          destinations
        </p>
        <a href="" class="my-btn mt-4 flex gap-1">
          <Icon name="cib:telegram-plane" class="h-5 w-5"></Icon> Show Hotels</a
        >
      </div>
    </div>
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
