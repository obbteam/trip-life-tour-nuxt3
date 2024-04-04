<template>
  <div class="fall-travel container mx-auto">
    <div class="flex items-center justify-between">
      <div class="plan-txt flex flex-col gap-4">
        <h1 class="section-header">Fall into travel</h1>
        <p class="">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got the travel tools to get you to your
          destination.
        </p>
      </div>
      <a href="" class="tile-btn">See all</a>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        class="fall-card relative flex items-end rounded-xl bg-cover bg-top text-white"
        v-for="(card, k) in cards"
        :key="k"
        :style="{ backgroundImage: `url(${card.img})` }"
      >
        <div class="layer2 flex flex-col gap-4 justify-end p-6">
            <div class="flex justify-between">
              <div>
                <h4 class="msb text-2xl">{{ card.name }}</h4>
                <h4 class="mont-r text-sm">{{ card.description }}</h4>
              </div>
              <h4 class="msb text-2xl">$ {{ card.price }}</h4>
            </div>
            <a href="" class="my-btn text-center">Book a trip</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    name: "Melbourne",
    description: "An amazing journey",
    price: 700,
    img: "https://images.unsplash.com/photo-1505642257289-9f2d7dd73641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80",
  },
  {
    id: 2,
    name: "Paris",
    description: "Paris Adventure",
    price: 600,
    img: "https://images.unsplash.com/photo-1565051757472-c0eb3a0f0622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 3,
    name: "London",
    description: "London eye adventure",
    price: 350,
    img: "https://images.unsplash.com/photo-1534974790529-3af7cf1c4075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80",
  },
  {
    id: 4,
    name: "Columbia",
    description: "Amazing streets",
    price: 480,
    img: "https://images.unsplash.com/photo-1606298246186-08868ab77562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];
</script>

<style lang="scss" scoped></style>
