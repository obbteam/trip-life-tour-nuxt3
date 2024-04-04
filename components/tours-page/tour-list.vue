<template>
  <div class="container mx-auto">
    <h1>Tours</h1>
    <div class="my-12 grid grid-cols-4 gap-5">
      <div
        class="tour-card green flex flex-col items-center bg-white p-5"
        v-for="p in products"
      >
        <nuxt-img :src="p.image" class="max-h-96 w-full" loading="lazy" />
        <NuxtLink :to="`/tours/${p.id}`" class="tgb">{{ p.title }}</NuxtLink>
        <p class="mm">{{ p.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
