<template>
  <div class="container mx-auto my-10">
    <nuxt-img class="max-h-96" :src="products.image" loading="lazy" />
    <h1>{{ products.title }}</h1>
    <p>{{ products.description }}</p>
    <p>{{ products.price }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "tours-layout",
});
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: products } = await useFetch(uri, { key: id });
</script>

<style lang="scss" scoped></style>
