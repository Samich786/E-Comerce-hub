<template>
  <div>
    <div
      class="fixed top-0 w-full z-50 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 bg-[#3D464D] border-b border-white"
    >
      <div class="flex items-center gap-20">
        <div
          class="relative bg-[#FFD333] h-16 flex items-center justify-between px-14"
          @click="isOpenCategory = !isOpenCategory"
        >
          <div class="flex items-center gap-2">
            <img src="/icon/burgr-icon.svg" alt="" class="h-4 w-4" />
            <span class="text-[15px] font-medium text-[#3D464D]"
              >Categories</span
            >
          </div>
          <transition name="fade-slide">
            <div
              v-if="isOpenCategory"
              class="absolute top-[65px] left-0 bg-white z-10 w-full"
            >
              <div
                v-for="data in categories"
                :key="data.id"
                class="border-b cursor-pointer border-[#e9edf2] py-2 px-3 text-[#898c8f] hover:text-[#FFD333]"
                @click="selectCategory(data)"
              >
                <span class="text-[12px] font-medium bg-white">
                  {{ data.name }}
                </span>
              </div>
            </div>
          </transition>
        </div>
        <div
          v-for="item in menueItem"
          :key="item.id"
          class="flex items-center gap-2"
        >
          <div>
            <span
              class="text-[14px] font-bold text-white hover:text-[#FFD333] cursor-pointer"
              :class="{ 'text-yellow-400': item.isActive }"
              @click="setActive(item)"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-1">
          <img src="/icon/heart.png" alt="" class="h-7 w-7" />
          <span
            class="border border-white rounded-full text-white font-medium text-sm px-1 py-[1px]"
            >0</span
          >
        </div>
        <div class="relative flex items-center gap-1">
          <img
            src="/icon/cart-icon.png"
            alt=""
            class="h-7 w-7"
            @click="isOpenCart = !isOpenCart"
          />
          <span
            class="border border-white rounded-full text-white font-medium px-1 text-sm py-[1px]"
            >{{ totalQuantity }}</span
          >
          <transition name="fade-slide">
            <div
              v-if="isOpenCart"
              class="absolute top-[45px] right-0 bg-white border shadow-lg border-gray-300 z-10 w-[350px] pt-5 pb-3"
            >
              <div v-if="getAllCarts.length > 0" class="">
                <div v-for="cart in getAllCarts" :key="cart._id">
                  <div
                    v-for="(item, index) in cart?.items.slice(0, 2)"
                    :key="index"
                  >
                    <div
                      class="flex items-center gap-3 py-5 px-2 bg-slate-100 mx-5 mb-5 relative"
                    >
                      <img
                        :src="item.products.picture"
                        alt=""
                        class="h-16 w-16"
                      />
                      <div class="flex flex-col">
                        <span class="text-black font-medium text-lg">{{
                          item.products.name
                        }}</span>
                        <span class="text-sm font-medium text-black"
                          >{{ item.quantity }} x ${{
                            item.products.price
                          }}</span
                        >
                      </div>
                      <div class="absolute right-0 top-0">
                        <img
                          src="/icon/cross-icon.png"
                          alt=""
                          class="h-4 w-4 bg-[#DC3545] cursor-pointer rounded-full px-1 py-1"
                          @click="removeFromCart(item)"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="flex justify-between items-center px-5 py-3">
                    <span class="text-lg font-medium text-black"
                      >Subtotal:</span
                    >
                    <span class="text-2xl text-[#FD5018] font-medium text-black"
                      >${{ cart.total }}</span
                    >
                  </div>
                  <div
                    class="text-secondary text-lg font-semibold text-center mt-5 bg-primary px-3 py-3 mx-5 cursor-pointer"
                    @click="viewCart"
                  >
                    <span>View Cart</span>
                  </div>
                  <div
                    class="text-secondary text-lg font-semibold text-center mt-5 bg-primary px-3 py-3 mx-5 cursor-pointer"
                    @click="handleCheckout"
                  >
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
              <div v-else class="text-center text-xl font-semobild">
                No carts found
              </div>
            </div>
          </transition>
        </div>
        <div
          class="text-white text-sm font-medium cursor-pointer"
          @click="logout"
        >
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "~/store/auth";
import { useProductsStore } from "~/store/products";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const productsStore = useProductsStore();
const router = useRouter();
const { getAllCarts } = storeToRefs(productsStore);

const isOpenCategory = ref(false);
const isOpenCart = ref(false);
const filter = ref({
  page: 1,
  limit: 20,
  isPopular: false,
  isNewArrival: false,
  discount: false,
  categoriesType: "",
});

const menueItem = ref([
  {
    id: 1,
    name: "Home",
    router: "/",
    isActive: true,
  },
  {
    id: 2,
    name: "Products",
    router: "/products",
    isActive: false,
  },
  {
    id: 3,
    name: "Shopping Cart",
    router: "/cart-details",
    isActive: false,
  },
  {
    id: 4,
    name: "Contact",
    router: "/contact",
    isActive: false,
  },
  {
    id: 5,
    name: "Checkout",
    router: "/checkout",
    isActive: false,
  },
]);

const categories = ref([
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Clothing",
  },
  {
    id: 3,
    name: "Shoes",
  },
  {
    id: 4,
    name: "Sports Products",
  },
  {
    id: 5,
    name: "Watches",
  },
  {
    id: 6,
    name: "Beauty Fashion",
  },
  {
    id: 7,
    name: "Tech Devices",
  },
  {
    id: 8,
    name: "Kids Products",
  },
  {
    id: 9,
    name: "Home Decor",
  },
  // ...other categories
]);

onMounted(async () => {
  menueItem.value.forEach((item) => {
    item.isActive = false;
  });

  // Check which menu item matches the current route path
  const currentItem = menueItem.value.find(
    (item) => router.currentRoute.value.path === item.router
  );

  // If a matching route is found, set it to active
  if (currentItem) {
    currentItem.isActive = true;
  }
});
//  Funtions or Methods ---------------------------------------------------------------
const viewCart = async () => {
  router.push("/cart-details");
  isOpenCart.value = false;
};
const handleCheckout = async () => {
  router.push("/checkout");
  isOpenCart.value = false;
};
const setActive = (item) => {
  console.log(item);
  menueItem.value.forEach((item) => {
    item.isActive = false;
  });
  item.isActive = true;
  router.push(item.router);
};
async function selectCategory(data) {
  filter.value.categoriesType = data.name;
  const filterData = {
    filter: filter.value,
  };
  await productsStore.fetchAllProductsData(filterData);
  router.push(`/products?categoriesType=${data.name}`);
}
const removeFromCart = async (item) => {
  try {
    const data = {
      productId: item.products._id,
    };
    const response = await productsStore.removeFromCartData(data);
    if (response.status === 200) {
      console.log(response.data.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
const logout = async () => {
  try {
    // Handle logout with proper state management
    const response = await authStore.logout();
    if (response.status === 200) {
      router.push("/auth/login");
    }
  } catch (error) {
    // Handle any errors during logout
    console.error("Logout error:", error);
  }
};
const totalQuantity = computed(() => productsStore.getTotalQuantity);
</script>

<style scoped>
/* Enter and Leave Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Start or end state */
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0); /* End or start state */
}
</style>
