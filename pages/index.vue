<template>
  <div>
    <div class="grid lg:grid-cols-3 gap-3 md:grid-cols-2 px-8 py-5">
      <div class="lg:col-span-2 xss:col-span-3 rounded-lg">
        <div class="carousel w-full relative">
          <!-- Carousel Items -->
          <div
            v-for="(item, index) in items"
            :key="index"
            :id="'item' + (index + 1)"
            class="carousel-item w-full"
            :class="{
              block: activeIndex === index,
              hidden: activeIndex !== index,
            }"
          >
            <img :src="item.src" class="w-full h-[450px]" />
          </div>

          <!-- Button Controls -->
          <div
            class="absolute z-40 inset-0 flex w-full justify-center gap-2 py-2"
            style="background-color: rgba(0, 0, 0, 0.6)"
          >
            <div class="flex flex-col gap-2 justify-center items-center mt-20">
              <div class="text-[30px] text-white font-bold">
                <span>Kids Fashion</span>
              </div>
              <div class="text-[15px] text-white font-medium text-center mt-3">
                <span
                  >Kids Fashion is a brand that offers a wide range of <br />
                  clothing and accessories for children</span
                >
              </div>
              <button
                class="btn btn-outline text-white border-2 mt-5 border-white hover:bg-white hover:text-black hover:border-white w-40"
              >
                Shop Now
              </button>
              <div class="flex gap-2 justify-center items-center mt-20">
                <a
                  v-for="(item, index) in items"
                  :key="'nav-' + index"
                  :href="'#item' + (index + 1)"
                  class="btn btn-xs border border-white bg-transparent hover:bg-white hover:border-white"
                  :class="[
                    {
                      'bg-white': activeIndex === index,
                    },
                    { 'w-7': activeIndex === index },
                  ]"
                  @click.prevent="setActive(index)"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-1 xss:col-span-3">
        <div class="flex flex-col gap-4 justify-center items-center">
          <div
            class="relative h-[216px] w-full"
            style="
              background-image: url('/image/cart-1.jpeg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-black"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <div class="flex flex-col items-center justify-center mt-10">
                <span class="text-white text-lg font-medium">Save20% </span>
                <span class="text-white text-2xl font-bold mt-1"
                  >Special Offer</span
                >
                <button
                  class="btn btn-outline text-[#3D464D] border-2 mt-3 bg-[#FFD333] border-[#FFD333] hover:bg-yellow-400 hover:text-white rounded-[2px] hover:border-none"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div
            class="relative h-[216px] w-full"
            style="
              background-image: url('/image/cart-1.jpeg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-black"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <div class="flex flex-col items-center justify-center mt-10">
                <span class="text-white text-lg font-medium">Save 20% </span>
                <span class="text-white text-2xl font-bold mt-1"
                  >Special Offer</span
                >
                <button
                  class="btn btn-outline text-[#3D464D] border-2 mt-3 bg-[#FFD333] border-[#FFD333] hover:bg-yellow-400 hover:text-white rounded-[2px] hover:border-none"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- cards section -->
    <div
      class="grid lg:grid-cols-4 gap-5 md:grid-cols-2 xs:grid-cols-1 px-8 py-5 mt-5"
    >
      <div
        class="col-span-1 px-7 py-2 bg-white"
        v-for="item in carditem"
        :key="item.id"
      >
        <div class="flex gap-4 py-5 items-center justify-center">
          <img :src="item.img" alt="" class="h-10 w-10" />
          <span class="text-xl font-semibold text-[#3D464D]">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
    <div class="mt-10 px-8 flex gap-5 items-center">
      <span class="text-[35px] font-semibold text-[#3D464D]">CATEGORIES</span>
      <div class="border-b border-dashed border-[#BEC5CB] w-full mt-2"></div>
    </div>
    <div
      class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1 px-8 py-5 mt-3"
    >
      <div
        class="col-span-1 bg-white text-[#3D464D] group"
        v-for="item in categories"
        :key="item.id"
      >
        <div class="grid grid-cols-8 items-center overflow-hidden" @click="selectCategory(item)">
          <!-- Image Container -->
          <div class="col-span-3 overflow-hidden px-2 py-1">
            <!-- Image with zoom effect on card hover -->
            <img
              :src="item.img"
              alt=""
              class="h-32 w-32 transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 object-contain"
            />
          </div>

          <!-- Text Content -->
          <div
            class="col-span-5 z-20 flex flex-col items-start pl-5 h-full justify-center group-hover:bg-[#FFD333]"
          >
            <span class="text-lg font-bold">{{ item.name }}</span>
            <span v-if="item?.productCount > 0" class="text-sm font-normal mt-1"
              >{{ item?.productCount }} Products</span
            >
            <span v-else class="text-sm font-normal mt-1"
              >{{ item?.count }} Products</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- New Arrivals section -->
    <div class="mt-10 px-8 flex items-center">
      <!-- Title Container -->
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]"
          >NEW ARRIVALS</span
        >
      </div>
      <!-- Dashed Border Container -->
      <div
        class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
      ></div>
    </div>
    <div
      class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1 px-8 py-5 mt-3"
    >
      <div class="col-span-1 group" v-for="item in newArrivals" :key="item?.id">
        <div class="card card-compact bg-white rounded-[1px] w-full h-[400px]">
          <!-- Custom height -->
          <div
            class="overflow-hidden h-full w-full flex justify-center items-center"
          >
            <img
              :src="item?.picture"
              class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 max-w-full maxh-full object-contain"
              alt="Shoes"
            />
          </div>
          <div
            class="py-5 pb-10 z-20 items-center text-center border shadow-lg"
            style="border-color: rgba(190, 197, 203, 0.2)"
          >
            <span class="text-xl font-semibold text-[#3D464D]">{{ item?.name }}</span>
            <div class="flex gap-3 items-center justify-center">
              <span v-if="item?.discountPrice>0" class="text-lg font-bold text-[#3D464D]">${{ item?.discountPrice }}</span>
              <span v-else class="text-lg font-bold text-[#3D464D]">${{ item?.price }}</span>
              <span v-if="item?.discountPrice>0" class="text-[15px] text-[#6C757D] font-normal line-through"
                >${{ item?.price }}</span
              >
            </div>
            <div class="flex gap-2 items-center justify-center">
              <Rating :rating="item?.rating" />
              <span class="text-sm font-normal">(99)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featured Products section -->
    <div class="mt-10 px-8 flex items-center">
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]"
          >FEATURED PRODUCTS</span
        >
      </div>
      <!-- Dashed Border Container -->
      <div
        class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
      ></div>
    </div>
    <div
      class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1 px-8 py-5 mt-3"
    >
      <div class="col-span-1 group" v-for="item in popularProducts" :key="item.id">
        <div class="card card-compact bg-white rounded-[1px] w-full h-[400px]">
          <!-- Custom height -->
          <div
            class="overflow-hidden h-full w-full flex justify-center items-center"
          >
            <img
              :src="item?.picture"
              class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 max-w-full maxh-full object-contain"
              alt="Shoes"
            />
          </div>
          <div
            class="py-5 pb-10 z-20 items-center text-center border shadow-lg"
            style="border-color: rgba(190, 197, 203, 0.2)"
          >
            <span class="text-xl font-semibold text-[#3D464D]">{{ item?.name }}</span>
            <div class="flex gap-3 items-center justify-center">
              <span v-if="item?.discountPrice>0" class="text-lg font-bold text-[#3D464D]">${{ item?.discountPrice }}</span>
              <span v-else class="text-lg font-bold text-[#3D464D]">${{ item?.price }}</span>
              <span v-if="item?.discountPrice>0" class="text-[15px] text-[#6C757D] font-normal line-through"
                >${{ item?.price }}</span
              >
            </div>
            <div class="flex gap-2 items-center justify-center">
              <Rating :rating="item?.rating" />
              <span class="text-sm font-normal">(99)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import  rating from '@/components/global/Rating.vue'
import { ref, onMounted } from "vue";
import { useProductsStore } from "@/store/products";
import { useRouter } from "vue-router"

const productStore = useProductsStore();
const router = useRouter();
// get getters


const currentRating = ref(4);
const activeIndex = ref(0);
const categories = ref([]);
const newArrivals = ref([]);
const popularProducts = ref([]);
const filter = ref({
  page: 1,
  limit: 20,
  isPopular: false,
  isNewArrival: false,
  discount: false,
  categoriesType: "",
});
const items = ref([
  {
    src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    title: "Kids Fashion",
    description:
      "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    title: "Mens Fashion",
    description:
      "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    title: "Women Fashion",
    description:
      "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    title: "Kids Fashion",
    description:
      "Kids Fashion is a brand that offers a wide range of clothing and accessories for children. Our products are designed to meet the needs of kids of all ages and are available in a variety of styles and colors.",
  },
]);
const carditem = ref([
  {
    id: 1,
    img: "/icon/icon-tick.svg",
    name: "Quality Products",
  },
  {
    id: 2,
    img: "/icon/icon-shipping.png",
    name: "Free Shipping",
  },
  {
    id: 3,
    img: "/icon/icon-exchange.png",
    name: "14-Days Return",
  },
  {
    id: 4,
    img: "/icon/icon-call.png",
    name: "24/7 Support",
  },
]);
onMounted(async () => {
  const response = await productStore.fetchCategories();
  if (response.status === 200) {
    categories.value = response.data?.data?.categories; // Assigning to ref
  }
  await fetchNewArrivals();
  await fetchPopular();
});
  const setActive= (index) => {
      this.activeIndex = index; // Set the active item based on the clicked index
    };
    const fetchPopular= async () => {
      try {
        const response = await productStore.fetchPopularData();
        if (response.status === 200) {
          console.log(response.data.data.data);
          
          popularProducts.value = response.data?.data?.data?.products;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchNewArrivals= async () => {
      try {
        const response = await productStore.fetchNewArrivalsData();
        if (response.status === 200) {
          console.log(response.data.data.data);
          
          newArrivals.value = response.data?.data?.data?.products;
        }
      } catch (error) {
        console.log(error);
      }
    };
   const selectCategory = async (data) => {
      filter.categoriesType.value = data.name;
      this.$router.push(`/products?categoriesType=${data.name}`);
    }
</script>

<style scoped>
.carousel-item {
  transition: opacity 0.5s ease-in-out;
  /* Add a smooth transition for opacity */
}
.zoom-image {
  transition: transform 0.3s ease;
}

.zoom-image:hover {
  transform: scale(1.1);
}
/* Add any scoped styles here */
</style>
