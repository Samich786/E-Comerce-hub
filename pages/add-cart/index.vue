<template>
  <div>
    <div class="grid lg:grid-cols-3 gap-3 md:grid-cols-1 px-20 py-5 mt-5">
      
      <div class="col-span-1 bg-white">
        <div
          class="overflow-hidden h-full w-full flex justify-center items-center px-3 py-3"
        >
          <img
            :src="getProductByIdData?.picture"
            class="transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:rotate-2 max-w-full maxh-full"
            alt="Shoes"
          />
        </div>
      </div>
      <div class="col-span-2 bg-white px-5 py-5">
        <div>
          <span class="text-2xl font-bold text-[#3D464D]">{{
            getProductByIdData?.name
          }}</span>
        </div>
        <div class="flex gap-3 items-center">
          <rating :rating="getProductByIdData?.rating" />
          <span class="text-sm font-normal text-black">(99) Reviews</span>
        </div>
        <div class="flex gap-3 items-center py-3">
          <span
            v-if="getProductByIdData?.discountPrice > 0"
            class="text-2xl font-bold text-[#3D464D]"
            >${{ getProductByIdData?.discountPrice }}.00</span
          >
          <span v-else class="text-2xl font-bold text-[#3D464D]"
            >${{ getProductByIdData?.price }}.00</span
          >
          <span
            v-if="getProductByIdData?.discountPrice > 0"
            class="text-[18px] text-[#6C757D] font-normal line-through"
            >${{ getProductByIdData?.price }}.00</span
          >
        </div>
        <div class="text-[#6C757D] font-medium">
          <span>{{ truncatedDescription }}</span>
        </div>
        <div class="flex gap-3 items-center">
          <div class="rounded-[1px] flex items-center pb-5 mt-5">
            <div
              class="bg-primary px-2.5 py-2 border border-Secondary"
              @click="decreement"
            >
              <img src="/icon/icons8-minus-32.png" alt="" class="h-5 w-5" />
            </div>
            <div class="bg-[#F5F5F5] px-5 py-1.5 border border-Secondary">
              <span>{{ productQuantity }}</span>
            </div>
            <div
              class="bg-primary px-2.5 py-2 border border-Secondary"
              @click="increment"
            >
              <img src="/icon/icons8-plus-30.png" alt="" class="h-5 w-5" />
            </div>
          </div>
          <div
            class="bg-primary px-2.5 py-2 border border-Secondary cursor-pointer"
            @click="addToCart"
          >
            <div class="flex items-center gap-2">
              <img src="/icon/add-to-cart-blk.png" alt="" class="h-5 w-5" />
              <span class="text-[#3D464D] text-sm font-semibold"
                >Add to Cart</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-7 flex items-center px-8">
      <!-- Title Container -->
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]"
          >YOU MAY ALSO LIKE THIS</span
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
      <div class="col-span-1 group" v-for="item in getProductByCategory" :key="item?.id">
        <div class="card card-compact bg-white rounded-[1px] w-full h-[400px] cursor-pointer"  >
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
              <rating :rating="item?.rating" />
              <span class="text-sm font-normal">(99)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useAuthStore } from "~/store/auth";
import { useProductsStore } from "@/store/products";
import Rating from "@/components/global/Rating.vue";

const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();
const { getProductByIdData, getProductByCategory } = storeToRefs(productsStore);
const authStore = useAuthStore();
const { LoginUser } = storeToRefs(authStore);

const productQuantity = ref(1);

onMounted(async () => {
  try {
    console.log(route.query.id, "id");
    const response = await productsStore.getProductById(route.query.id);
    if (response.status === 200) {
      console.log(response.data.data.data);
      fetchBycategory()
    }
  } catch (error) {
    console.log(error);
  }
  
});
const truncatedDescription = computed(() => {
  // Split the description into words and slice the first 20 words
  const words = productsStore.getProductByIdData?.description?.split(" ");
  return words?.slice(0, 30).join(" ") + (words?.length > 30 ? "..." : "");
});
const increment = () => {
  productQuantity.value++;
};
const decreement = () => {
  if (productQuantity.value !== 1) {
    productQuantity.value--;
  }
};
const fetchBycategory = async () => {
  try{
    const data ={
      category:getProductByIdData.value.category
    }
    const response = await productsStore.fetchProductByCategory(data);
  }catch(error){
    console.log(error);
  }
};
const addToCart = async () => {
  try {
    const data = {
      productId: getProductByIdData.value._id,
      quantity: productQuantity.value,
    };
    console.log(getProductByIdData);
    console.log(data);

    const response = await productsStore.addToCartData(data);
    if (response.status === 200) {
      console.log(response.data.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
