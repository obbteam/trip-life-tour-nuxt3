<template>
  <div class="plan-trip container mx-auto mb-20">
    <div class="flex items-center justify-between">
      <div class="plan-txt flex flex-col gap-4">
        <h1 class="section-header">Reviews</h1>
        <p class="">What people says about Golobe facilities</p>
      </div>
      <a href="" class="tile-btn">See All</a>
    </div>

    <Swiper
      :slidesPerView="3"
      :spaceBetween="50"
      :grabCursor="true"
      :slidesOffsetAfter="50"
      :slidesOffsetBefore="20"
      class="mt-10"
    >
      <SwiperSlide
        v-for="(card, idx) in cards"
        :key="idx"
        class="review-card green mb-7 gap-10 rounded-2xl bg-white p-6"
      >
        <div class="review-txt flex flex-col">
          <h1 class="tgb mb-4 text-2xl">“{{ card.title }}”</h1>
          <p class="mb-3">{{ card.txt }}</p>
          <a href="" class="green tgb self-end text-sm">View more</a>
          <div class="rating mb-5 flex gap-1">
            <Icon
              name="ic:baseline-star"
              class="h-6 w-6 text-yellow-500"
              v-for="i in card.rating"
              :key="i"
            ></Icon>
          </div>
          <h2 class="tgb mb-1 text-sm">
            {{ card.name }}
          </h2>
          <span class="mb-3">{{ card.work }}</span>
          <div class="flex items-center gap-2">
            <Icon :name="card.icon" class="h-6 w-6"></Icon>
            <span class="tgb">{{ card.company }}</span>
          </div>
        </div>

        <div class="review-img">
          <img
            :src="card.src"
            alt="review img"
            class="h-48 w-full rounded-lg object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      cards: [
        {
          id: 1,
          name: "Olga",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1535025287458-e3badca98021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        },
        {
          id: 2,
          name: "Thomas",
          title: "The facilities are superb. Clean, slick, bright.",
          txt: "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.А",
          rating: 5,
          work: "Weave Studios – Olympic",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1525220964737-6c299398493c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
          id: 3,
          name: "Baku, Azerbaijanh",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 5,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1517094629229-f5e0c2f88440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
          id: 4,
          name: "Malé, Maldives",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
        },
        {
          id: 5,
          name: "Paris, France",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        {
          id: 6,
          name: "New York, US",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        },
        {
          id: 7,
          name: "London, UK",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        },
        {
          id: 8,
          name: "Tokyo, Japan",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
        },
        {
          id: 9,
          name: "Dubai, UAE",
          title: "A real sense of community, nurtured",
          txt: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
          rating: 4,
          work: "Weave Studios – Kai Tak",
          company: "Google",
          icon: "logos:google-icon",
          src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
