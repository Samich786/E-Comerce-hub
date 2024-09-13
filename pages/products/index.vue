<template>
  <div class="">
    <div class="flex justify-between items-center px-8 mt-3">
      <div v-if="LoginUser?.role === 'admin'">
        <AddorEditProductModal />
      </div>
      <!-- Show the products -->
    </div>
    <div class="mt-7 flex items-center px-8">
      <!-- Title Container -->
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]"
          >Available Products</span
        >
      </div>
      <!-- Dashed Border Container -->
      <div
        class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
      ></div>
    </div>
    <div
      class="flex justify-end gap-3 items-center px-8 mt-3"
      :class="{ 'dropdown-open': isSortDropdown }"
      v-if="allProducts.length > 0"
    >
      <div class="dropdown dropdown-bottom dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="bg-white text-black text-sm py-1 px-3 font-semibold"
          @click="toggleSortingDropdown"
        >
          Sorting
        </div>
        <ul
          v-if="isSortDropdown"
          tabindex="0"
          class="dropdown-content menu bg-white rounded-none z-[1] w-52 p-2 shadow mt-1"
          @click="handleSort"
        >
          <li><a>All</a></li>
          <li><a>Popularity</a></li>
          <li><a>New Arrival</a></li>
          <li><a>Discount Offer</a></li>
        </ul>
      </div>
      <div
        class="dropdown dropdown-bottom dropdown-end"
        :class="{ 'dropdown-open': isLimitDropdown }"
      >
        <div
          tabindex="0"
          role="button"
          class="bg-white text-black text-sm py-1 px-3 font-semibold"
          @click="toggleLimitDropdown"
        >
          Showing
        </div>
        <ul
          v-if="isLimitDropdown"
          tabindex="0"
          class="dropdown-content menu bg-white rounded-none z-[1] w-52 p-2 shadow mt-1"
          @click="handleLimit"
        >
          <li><a>20</a></li>
          <li><a>30</a></li>
          <li><a>40</a></li>
        </ul>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1 px-8 py-2 mt-3"
      v-if="allProducts.length > 0"
    >
      <div class="col-span-1 group" v-for="item in allProducts" :key="item.id">
        <div
          class="card card-compact bg-white rounded-[1px] w-full h-[400px] cursor-pointer"
          @click="getSingleProduct(item)"
        >
          <!-- Custom height -->
          <div
            class="overflow-hidden h-full w-full flex justify-center items-center relative"
          >
            <img
              :src="item?.picture"
              class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 max-w-full maxh-full object-contain"
              alt="Shoes"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
              <div
                class="flex gap-4 justify-center items-center -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
              >
                <!-- Add to Cart Icon -->
                <button class="text-gray-600 hover:text-blue-500">
                  <img src="/icon/cart-icon.png" alt="" class="h-5 w-5" />
                </button>

                <!-- Add to Wishlist Icon -->
                <button class="text-gray-600 hover:text-red-500">
                  <img src="/icon/heart.png" alt="" class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div
            class="py-5 pb-10 z-20 items-center text-center border shadow-lg"
            style="border-color: rgba(190, 197, 203, 0.2)"
          >
            <span class="text-xl font-semibold text-[#3D464D]">{{
              item?.name
            }}</span>
            <div class="flex gap-3 items-center justify-center">
              <span
                v-if="item?.discountPrice > 0"
                class="text-lg font-bold text-[#3D464D]"
                >${{ item?.discountPrice }}</span
              >
              <span v-else class="text-lg font-bold text-[#3D464D]"
                >${{ item?.price }}</span
              >
              <span
                v-if="item?.discountPrice > 0"
                class="text-[15px] text-[#6C757D] font-normal line-through"
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
    <div
      v-else
      class="flex flex-col justify-center gap-5 items-center mt-20 pb-[200px]"
    >
      <img
        src="/public/image/not-found.png"
        alt="not found"
        class="object-contain h-60 w-96"
      />
      <span class="text-2xl font-semibold text-[#3D464D]"
        >No Products Found</span
      >
    </div>

    <div
      v-if="allProducts.length > 0"
      class="rounded-[1px] flex justify-center pb-5 mt-3"
    >
      <button
        class="bg-white text-primary px-2.5 py-1.5 border border-Secondary"
        @click="prevPage"
        :class="{}"
      >
        Previous
      </button>
      <button
        class="bg-white text-white px-2.5 py-1.5 border border-Secondary"
        @click="pageOne"
        :class="[
          { 'bg-primary': filter.page === 1 },
          { 'text-white': filter.page === 1 },
        ]"
      >
        1
      </button>
      <button
        class="bg-white text-primary px-2.5 py-1.5 border border-Secondary"
        @click="pageTwo"
        :class="{ 'bg-primary': filter.page === 2 }"
      >
        2
      </button>
      <button
        class="bg-white text-primary px-2.5 py-1.5 border border-Secondary"
        @click="pageThree"
        :class="{ 'bg-primary': filter.page === 3 }"
      >
        3
      </button>
      <button
        class="bg-white text-primary px-2.5 py-1.5 border border-Secondary"
        @click="nextPage"
        :class="{ 'bg-primary': filter.page === allProducts?.totalPages }"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

import AddorEditProductModal from "@/components/global/AddorEditProductModal.vue";
import Rating from "@/components/global/Rating.vue";
import { useProductsStore } from "@/store/products";
import { useAuthStore } from "@/store/auth";

const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();
const authStore = useAuthStore();
const { getAllProducts } = storeToRefs(productsStore);
const { LoginUser } = storeToRefs(authStore);

const isSortDropdown = ref(false);
const isLimitDropdown = ref(false);
const filter = ref({
  page: 1,
  limit: 20,
  isPopular: false,
  isNewArrival: false,
  discount: false,
  categoriesType: "",
});
onMounted(async () => {
  if (route.query.categoriesType) {
    filter.value.categoriesType = route.query.categoriesType;
    await fetchAllProducts();
  } else {
    await fetchAllProducts();
  }
});
const fetchAllProducts = async () => {
  try {
    const data = {
      filter: filter.value,
    };
    const response = await productsStore.fetchAllProductsData(data);
    if (response.status === 200) {
      console.log(response.data.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
const toggleSortingDropdown = () => {
  isLimitDropdown.value = false;
  isSortDropdown.value = !isSortDropdown.value;
};
const toggleLimitDropdown = () => {
  isSortDropdown.value = false;
  isLimitDropdown.value = !isLimitDropdown.value;
};
const handleLimit = (val) => {
  limit.value = val.target.innerText;
  isLimitDropdown.value = false;
  fetchAllProducts();
  // this.$router.push({ name: "Products" });
};
const handleSort = (val) => {
  if (val.target.innerText === "Popularity") {
    filter.value.isPopular = true;
    filter.value.isNewArrival = false;
    filter.value.discount = false;
  } else if (val.target.innerText === "New Arrival") {
    filter.value.isNewArrival = true;
    filter.value.isPopular = false;
    filter.value.discount = false;
  } else if (val.target.innerText === "Discount Offer") {
    filter.value.discount = true;
    filter.value.isPopular = false;
    filter.value.isNewArrival = false;
  } else {
    filter.value.isPopular = false;
    filter.value.isNewArrival = false;
    filter.value.discount = false;
  }
  isSortDropdown.value = false;
  fetchAllProducts();
  // this.$router.push({ name: "Products" });
};
const pageOne = () => {
  if (filter.value.page !== 1) {
    filter.value.page = 1;
    fetchAllProducts();
  }
};
const pageTwo = () => {
  if (filter.value.page !== 2 && getAllProducts?.totalPages > 1) {
    filter.value.page = 2;
    fetchAllProducts();
  }
};
const pageThree = () => {
  if (filter.value.page !== 3 && getAllProducts?.totalPages > 2) {
    filter.value.page = 3;
    fetchAllProducts();
  }
};
const nextPage = () => {
  if (
    filter.value.page !== getAllProducts?.totalPages &&
    getAllProducts?.totalPages > 1
  ) {
    filter.value.page += 1;
    fetchAllProducts();
  }
};
const prevPage = () => {
  if (filter.value.page !== 1) {
    filter.value.page -= 1;
    fetchAllProducts();
  }
};
const getSingleProduct = async (item) => {
  try {
    router.push(`/add-cart?id=${item._id}`);
  } catch (error) {
    console.log(error);
  }
};
const allProducts = computed(() => {
  const products = productsStore.getAllProducts?.products || [];
  return products.length === 0 ? [] : products;
});
watch(
  getAllProducts, // Watching this reference
  (newVal) => {
    filter.value.page = newVal.currentPage;
    console.log(filter.value.page);
  },
  { deep: true } // This ensures the watch is deep and catches nested changes
);
</script>
