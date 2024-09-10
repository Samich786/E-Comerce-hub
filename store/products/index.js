// stores/auth/index.js
import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";

export const useProductsStore = defineStore('products',{
  state,
  actions,
  getters: {
    getProductByIdData: (state)=> state.productById,
    getAllProducts: (state)=> state.allProducts,
    getCategories: (state)=> state.categories,
  },
});
