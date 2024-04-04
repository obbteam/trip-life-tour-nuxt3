<template>
  <div>
    <header class="relative w-full bg-white px-4">
      <nav
        class="my-nav white-nav container mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div class="flex justify-end lg:hidden">
          <button
            type="button"
            class="green -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div
          class="link_list gap-lg-8 hidden w-1/3 gap-5 lg:flex lg:items-center"
        >
          <NuxtLink to="/" class="green text-sm">
            <div class="flex gap-1.5">
              <Icon name="material-symbols:globe-asia" class="h-5 w-5"></Icon>
              <span>Home</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/tours" class="green text-sm">
            <div class="flex gap-1.5">
              <Icon name="ion:airplane" class="h-5 w-5"></Icon>
              <span>Our tours</span>
            </div>
          </NuxtLink>
        </div>

        <div class="nav-brand flex w-1/3 justify-center lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Trip life tour</span>
            <img
              class="h-12 w-auto lg:h-14"
              src="../assets/icons/logo-dark.svg"
              alt=""
            />
          </NuxtLink>
        </div>

        <div
          class="gap-lg-8 icon-group hidden w-1/3 items-center gap-5 lg:flex lg:flex-1 lg:justify-end"
        >
          <NuxtLink to="/about" class="green text-sm">
            <span>About us</span>
          </NuxtLink>
          <NuxtLink to="/" class="nav-btn text-sm">
            <div class="flex gap-1.5">
              <Icon
                name="material-symbols:phone-in-talk-rounded"
                class="h-5 w-5"
              ></Icon>
              <span>Contact us</span>
            </div>
          </NuxtLink>
        </div>
      </nav>
      <!-- <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="../assets/icons/logo-dark.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >About</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Our tours</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Explore</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Guide</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Contacts</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> -->
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
// import { UserIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const mobileMenuOpen = ref(false);
</script>
