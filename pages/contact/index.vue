<template>
  <div class="h-full" style="padding-top: 50px !important">
    <div class="px-8 flex items-center">
      <!-- Title Container -->
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]">CONTACT US</span>
      </div>
      <!-- Dashed Border Container -->
      <div
        class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
      ></div>
    </div>
    <div class="grid lg:grid-cols-3 gap-10 md:grid-cols-1 px-8 py-5 pb-10">
      <div class="col-span-2">
        <div class="flex flex-col gap-5 bg-white px-10 py-5 mt-5">
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  v-model="user.name"
                  type="text"
                  placeholder="Name"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  v-model="user.email"
                  type="text"
                  placeholder="Your Email"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  v-model="user.subject"
                  type="text"
                  placeholder="Subject"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <textarea
                  v-model="user.message"
                  type="text"
                  placeholder="Message"
                  rows="8"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div
            class="text-secondary text-xl font-semibold text-center mt-5 bg-primary mx-5 py-3"
            @click="sendMessage"
          >
            <span>Send Message</span>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="relative mt-5 bg-white px-5 py-5">
          <img src="/image/map2.webp" alt="" class="h-full w-full" />
          <div class="absolute top-0 left-5 bg-white px-3 py-2">
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-secondary">
                Islamabad,Pakistan
              </span>
              <span
                class="underline text-blue-500 -mt-2 cursor-pointer"
                style="font-size: 10px"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=33.6974036,72.9828163"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a></span
              >
            </div>
          </div>
        </div>

        <div class="mt-5 bg-white px-5 py-5">
          <div class="flex items-center gap-3 mb-2">
            <img src="/icon/location.png" alt="" class="h-5 w-5" />
            <span class="text-sm font-medium text-secondary">
              303-302 Street 20, NPF E 11/4 E-11, Islamabad, Pakistan
            </span>
          </div>
          <div class="flex items-center gap-3 mb-2">
            <img src="/icon/mail.png" alt="" class="h-5 w-5" />
            <span class="text-sm font-medium text-secondary">
              info@example.com
            </span>
          </div>
          <div class="flex items-center gap-3">
            <img src="/icon/phone-icon.png" alt="" class="h-5 w-5" />
            <span class="text-sm font-medium text-secondary">
              +012 345 67890
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useProductsStore } from "@/store/products";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { ref, onMounted, computed } from "vue";

const productsStore = useProductsStore();
const router = useRouter();
const { getAllCarts } = storeToRefs(productsStore);
const total = computed(() => productsStore.getTotal);
const user = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const sendMessage = async () => {
  try {
    const response = await productsStore.sendMessage(user.value);
    if (response.status === 200) {
      console.log(response.data.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<style>
input[type="radio"]:checked {
  appearance: none;
  /* background-color: #ffd333; */
  border-radius: 50%;
  border: #ffd333 5px solid;
  padding: 2px;
}
</style>
