<template>
  <div class="">
    <div class="mt-7 flex items-center px-8">
      <!-- Title Container -->
      <div class="flex-shrink-0">
        <span class="text-[35px] font-semibold text-[#3D464D]"
          >CART DETAILS</span
        >
      </div>
      <!-- Dashed Border Container -->
      <div
        class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
      ></div>
    </div>
    <div class="grid lg:grid-cols-3 gap-10 md:grid-cols-1 px-8 py-5 pb-10">
      <div class="col-span-2 bg-white">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead class="bg-secondary text-white">
              <tr>
                <th></th>
                <th>Products</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody v-if="getAllCarts.length > 0">
              <!-- row 1 -->
              <template v-for="cart in getAllCarts" :key="cart._id">
                <!-- Loop through items in each cart -->
                <tr
                  v-for="(item, index) in cart.items"
                  :key="index"
                  class="hover:bg-gray-400 hover:text-white"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ item.products.name }}
                  </td>
                  <td>
                    <div v-if="item.products.discountPrice > 0">
                      <span>${{ item.products?.discountPrice }}</span>
                    </div>
                    <div v-else>${{ item.products?.price }}</div>
                  </td>
                  <td>
                    <div class="rounded-[1px] flex items-center">
                      <div
                        class="bg-primary px-2 py-1 border border-Secondary"
                        @click="decreement"
                      >
                        <img
                          src="/icon/icons8-minus-32.png"
                          alt=""
                          class="h-5 w-5"
                        />
                      </div>
                      <div
                        class="bg-[#F5F5F5] px-3 py-1 border border-Secondary"
                      >
                        <span>{{ item.quantity }}</span>
                      </div>
                      <div
                        class="bg-primary px-2 py-1 border border-Secondary"
                        @click="increment"
                      >
                        <img
                          src="/icon/icons8-plus-30.png"
                          alt=""
                          class="h-5 w-5"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div v-if="item.products.discountPrice > 0">
                      <span
                        >${{
                          item.products?.discountPrice * item.quantity
                        }}</span
                      >
                    </div>
                    <div v-else>
                      ${{ item.products?.price * item.quantity }}
                    </div>
                  </td>
                  <td>
                    <div class="">
                      <img
                        src="/icon/cross-icon.png"
                        alt=""
                        class="h-5 w-5 bg-[#DC3545] cursor-pointer px-1 py-1" @click="removeFromCart(item)"
                      />
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
            <tbody v-else>
              <tr class="border-none">
                <td colspan="7" class="text-center text-xl font-semibold text-[#3D464D] py-20">
                  <span>No Items in Cart</span>
                </td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex items-center bg-white justify-between">
          <div>
            <input
              type="text"
              placeholder="Coupon Code"
              class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
            />
          </div>
          <div
            class="bg-primary text-secondary px-2.5 py-3 border border-primary"
          >
            <span>Apply Coupon</span>
          </div>
        </div>
        <div class="mt-5 flex items-center">
          <!-- Title Container -->
          <div class="flex-shrink-0">
            <span class="text-[25px] font-semibold text-[#3D464D]"
              >CART SUMMARY</span
            >
          </div>
          <!-- Dashed Border Container -->
          <div
            class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
          ></div>
        </div>
        <div class="mt-5 bg-white px-5 py-5">
          <div
            class="flex justify-between font-semibold items-center text-secondary mt-3"
          >
            <span>Subtotal</span>
            <span class="text-lg font-semibold text-secondary"
              >${{ total }}</span
            >
          </div>
          <div
            class="flex justify-between font-semibold items-center text-secondary mt-3 mb-3"
          >
            <span>Shipping</span>
            <span class="text-lg font-semibold text-secondary">$10</span>
          </div>
          <hr />
          <div
            class="flex text-xl justify-between font-semibold items-center text-secondary mt-3"
          >
            <span>Total</span>
            <span class="text-xl font-semibold text-secondary"
              >${{ total + 10 }}</span
            >
          </div>
          <div
            class="text-secondary text-xl font-semibold text-center mt-5 bg-primary px-3 py-3" @click="handleCheckout"
          >
            <span>Proceed to Checkout</span>
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

onMounted(async () => {
  await productsStore.fetchAllCarts();
});
const total = computed(() => productsStore.getTotal);

const removeFromCart = async (item) => {
  try {
    console.log(item.products._id);
    
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
const handleCheckout = async () => {
  router.push("/checkout");
};
</script>
