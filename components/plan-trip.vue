<template>
  <div class="plan-trip container mx-auto">
    <div class="flex items-center justify-between">
      <div class="plan-txt flex flex-col gap-4">
        <h1 class="section-header">Plan your perfect trip</h1>
        <p class="">
          Search Flights & Places Hire to our most popular destinations
        </p>
      </div>
      <a href="" class="tile-btn">See more places</a>
    </div>
    <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="trip-card flex items-center gap-4 rounded-2xl bg-white p-4"
        v-for="(card, k) in cards"
        :key="k"
      >
        <img
          :src="card.src"
          class="h-24 w-24 rounded-lg object-cover"
          alt="Trip image"
        />
        <div>
          <h4 class="mb-2">{{ card.name }}</h4>
          <ul class="flex gap-5">
            <li>Flights</li>
            <li>Hotels</li>
            <li>Resorts</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      cards: [
        {
          id: 1,
          name: "Istanbul, Turkey",
          src: "https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
        {
          id: 2,
          name: "Sydney, Australia",
          src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
          id: 3,
          name: "Baku, Azerbaijanh",
          src: "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
        },
        {
          id: 4,
          name: "Malé, Maldives",
          src: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
        },
        {
          id: 5,
          name: "Paris, France",
          src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 6,
          name: "New York, US",
          src: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        },
        {
          id: 7,
          name: "London, UK",
          src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        },
        {
          id: 8,
          name: "Tokyo, Japan",
          src: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
        },
        {
          id: 9,
          name: "Dubai, UAE",
          src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
