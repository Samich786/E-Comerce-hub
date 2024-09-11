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
    getAllCarts: (state)=> state.carts,
    getTotal: (state) => {
      return state.carts?.length > 0 ? state.carts[0].total : 0; // Access total safely
    },
    getTotalQuantity: (state) => {
      return state.carts?.length > 0 ? state.carts[0].totalQunatity : 0;
    }
  },
});
