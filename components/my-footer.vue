<template>
  <div class="footer-section">
    <footer class="my-footer">
      <div
        class="green container relative mx-auto flex flex-col gap-16 pb-16 pt-8"
      >
        <div class="news-part flex w-full justify-between px-6 py-0">
          <div class="flex w-2/5 flex-col gap-6 py-6">
            <h1 class="tgb text-5xl">
              Subscribe <br />
              Newsletter
            </h1>
            <div class="news-txt">
              <h3 class="tgb mb-2 text-xl">The travel</h3>
              <p class="mm mb-4 text-base">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </p>
              <div class="flex gap-4">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="mont-r block w-full rounded border-0 py-4 pl-4 text-base placeholder:text-base placeholder:text-stone-950"
                  placeholder="Your email address"
                />
                <a href="" class="black-btn">Subscribe</a>
              </div>
            </div>
          </div>
          <img
            src="../assets/icons/footer-icon.svg"
            alt=""
            class="relative right-0 w-1/3 lg:w-max"
          />
        </div>
        <div class="footer-links flex gap-36 flex-wrap md:flex-nowrap">
          <div class="footer-brand w-1/6">
            <NuxtLink to="/">
              <img src="../assets/icons/logo-dark.svg" alt="" class="w-full" />
            </NuxtLink>
            <div class="mt-6 flex justify-between">
              <NuxtLink to="/">
                <Icon name="ic:baseline-facebook" class="green h-8 w-8"></Icon>
              </NuxtLink>
              <NuxtLink to="/">
                <Icon name="ic:baseline-telegram" class="green h-8 w-8"></Icon>
              </NuxtLink>
              <NuxtLink to="/">
                <Icon
                  name="ph:instagram-logo-fill"
                  class="green h-8 w-8"
                ></Icon>
              </NuxtLink>
              <NuxtLink to="/">
                <Icon
                  name="material-symbols:mail-rounded"
                  class="green h-8 w-8"
                ></Icon>
              </NuxtLink>
            </div>
          </div>
          <div class="footer-links grid grid-cols-2 w-full md:grid-cols-12 lg:grid-cols-5 gap-6">
            <div class="w-full col-span-1 md:col-span-4 lg:col-span-1">
              <h4 class="tgb mb-4 text-base">Our Destinations</h4>
              <ul class="mm flex flex-col gap-3 text-sm">
                <li>Canada</li>
                <li>Alaksa</li>
                <li>France</li>
                <li>Iceland</li>
              </ul>
            </div>
            <div class="w-full col-span-1 md:col-span-4 lg:col-span-1">
              <h4 class="tgb mb-4 text-base">Our Activities</h4>
              <ul class="mm flex flex-col gap-3 text-sm">
                <li>Northern Lights</li>
                <li>Cruising & sailing</li>
                <li>Multi-activities</li>
                <li>Kayacing</li>
              </ul>
            </div>
            <div class="w-full col-span-1 md:col-span-4 lg:col-span-1">
              <h4 class="tgb mb-4 text-base">Travel Blogs</h4>
              <ul class="mm flex flex-col gap-3 text-sm">
                <li>Bali Travel Guide</li>
                <li>Sri Lanks Travel Guide</li>
                <li>Peru Travel Guide</li>
                <li>Bali Travel Guide</li>
              </ul>
            </div>
            <div class="w-full col-span-1 md:col-span-4 lg:col-span-1">
              <h4 class="tgb mb-4 text-base">About Us</h4>
              <ul class="mm flex flex-col gap-3 text-sm">
                <li>Our Story</li>
                <li>Work with us</li>
              </ul>
            </div>
            <div class="w-full col-span-1 md:col-span-4 lg:col-span-1">
              <h4 class="tgb mb-4 text-base">Contact Us</h4>
              <ul class="mm flex flex-col gap-3 text-sm">
                <li>Our Story</li>
                <li>Work with us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
