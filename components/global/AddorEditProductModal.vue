<template>
  <div>
    <!-- You can open the modal using ID.showModal() method -->
    <button
      class="btn bg-primary text-secondary hover:bg-secondary hover:text-white"
      onclick="my_modal_3.showModal()"
    >
      Create Product
    </button>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-4"
          >
            ✕
          </button>
        </form>
        <h3 class="text-lg font-bold">Add New Product</h3>
        <div class="flex flex-col gap-3 mt-3">
          <div>
            <input
              type="file"
              class="file-input file-input-bordered w-full"
              @input="handleFileUpload"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="product.name"
              placeholder="Product Title"
              class="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="product.price"
              placeholder="Product Price"
              class="input input-bordered w-full"
            />
          </div>
          <div>
            <textarea
              class="textarea textarea-bordered w-full"
              v-model="product.description"
              placeholder="Bio"
            ></textarea>
          </div>
          <div>
            <input
              type="text"
              v-model="product.discount"
              placeholder="Discount Available"
              class="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="date"
              v-model="product.endDate"
              placeholder="Discount Date"
              class="input input-bordered w-full"
            />
          </div>
          <div>
            <select
              class="select select-bordered w-full"
              v-model="selectedCategory"
            >
              <!-- Iterate over getCategories to create options -->
              <option
                v-for="category in getCategories"
                :key="category.id"
                :value="category"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="flex justify-between items-center">
            <div class="form-control">
              <label class="label cursor-pointer flex gap-3 items-center">
                <span class="label-text">New Arrival</span>
                <input
                  type="checkbox"
                  :checked="isNewArrival"
                  class="checkbox"
                  @change="handleArrival"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer flex gap-3 items-center">
                <span class="label-text">Best Seller</span>
                <input
                  type="checkbox"
                  :checked="isBestSeller"
                  class="checkbox"
                  @change="handleBestSeller"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="modal-action flex gap-3 justify-end">
          <button class="btn btn-primary" @click="handleSubmit">Save</button>
          <button class="btn" onclick="my_modal_3.close()">Cancel</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/store/products";

const router = useRouter();
const productsStore = useProductsStore();
const { getCategories } = storeToRefs(productsStore);

const isNewArrival = ref(false);
const isBestSeller = ref(false);
const selectedCategory = ref(null);

const product = ref({
  name: "",
  description: "",
  price: "",
  discount: "",
  image: "",
  endDate: "",
});
const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("name", product?.name);
  formData.append("description", product?.description);
  formData.append("price", product?.price);
  formData.append("discountPercentage", product?.discount);
  formData.append("picture", product?.image);
  formData.append("endDate", product?.endDate);
  formData.append("category", selectedCategory?.id);
  formData.append("isNewArrival", isNewArrival);
  formData.append("isPopular", isBestSeller);
  const response = await productsStore.createProduct(formData);
  if (response.ok) {
    console.log("Product created successfully");
  }
};
const handleFileUpload = (e) => {
  console.log(e.target.files[0]);
  product.image.value = e.target.files[0];
};
const handleArrival = () => {
  isNewArrival.value = !isNewArrival.value;
};
const handleBestSeller = () => {
  isBestSeller.value = !isBestSeller.value;
};
</script>
