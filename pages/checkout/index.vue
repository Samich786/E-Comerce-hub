<template>
  <div class="h-full">
    <div
      class="grid lg:grid-cols-3 gap-10 md:grid-cols-1 px-8 py-5 pb-10 h-calc(100vh - 64px)"
    >
      <div class="col-span-2">
        <div class="mt-5 flex items-center">
          <!-- Title Container -->
          <div class="flex-shrink-0">
            <span class="text-[25px] font-semibold text-[#3D464D]"
              >BILLING ADDRESS</span
            >
          </div>
          <!-- Dashed Border Container -->
          <div
            class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
          ></div>
        </div>
        <div class="flex flex-col gap-5 bg-white px-10 py-5 mt-5">
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">First Name</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Sami"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">Last Name</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Ch"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">E-mail</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="sami@gmail.com"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">Mobile No</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="+1123 456 789"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]"
                >Address Line 1</span
              >
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="123 Street"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]"
                >Address Line 2</span
              >
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="House no 5"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">Country</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Pakistan"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">City</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Islamabad"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center bg-white gap-5 px-5">
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">Sate</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="Islamabad"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
            <div class="w-full">
              <span class="text-lg font-normal text-[#6C757D]">Zip Code</span>
              <div class="border border-[#BEC5CB] px-3 py-2 mt-2">
                <input
                  type="text"
                  placeholder="123"
                  class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="mt-5 flex items-center">
          <!-- Title Container -->
          <div class="flex-shrink-0">
            <span class="text-[25px] font-medium text-[#3D464D]"
              >CART SUMMARY</span
            >
          </div>
          <!-- Dashed Border Container -->
          <div
            class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
          ></div>
        </div>
        <div class="mt-5 bg-white px-5 py-5">
          <span class="text-lg font-semibold text-secondary">Products</span>
          <div v-if="getAllCarts.length > 0" class="py-3">
            <div v-for="cart in getAllCarts" :key="cart._id">
              <div v-for="(item, index) in cart.items" :key="index">
                <div
                  class="flex justify-between font-normal items-center text-secondary mt-3"
                >
                  <span>{{ item.products.name }}</span>
                  <span
                    v-if="item.products.discountPrice > 0"
                    class="text-lg font-normal text-secondary"
                    >${{ item.products?.discountPrice * item.quantity}}</span
                  >
                  <span v-else class="text-lg font-medium text-secondary"
                    >${{ item.products?.price * item.quantity}}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="text-center text-lg font-medium text-[#3D464D] py-20"
          >
            <span>No Items in Cart</span>
          </div>
          <hr />
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
        </div>
        <div class="mt-5 flex items-center">
          <!-- Title Container -->
          <div class="flex-shrink-0">
            <span class="text-[25px] font-semibold text-[#3D464D]"
              >PAYMENT</span
            >
          </div>
          <!-- Dashed Border Container -->
          <div
            class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
          ></div>
        </div>
        <div class="mt-5 bg-white px-5 py-5">
          <div class="flex gap-3 items-center">
            <input type="radio" name="payment" value="bank" checked />
            <span>Bank Transfer</span>
          </div>
          <div class="flex gap-3 items-center">
            <input type="radio" name="payment" value="jazzcash" checked />
            <span>JazzCash</span>
          </div>
          <div class="flex gap-3 items-center">
            <input type="radio" name="payment" value="cash" checked />
            <span>Cash on Delivery</span>
          </div>
          <div
            class="text-secondary text-xl font-semibold text-center mt-5 bg-primary px-3 py-3"
          >
            <span>Place Order</span>
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
