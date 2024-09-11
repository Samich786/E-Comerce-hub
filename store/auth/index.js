// stores/auth/index.js
import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";

export const useAuthStore = defineStore("auth", {
  state,
  actions,
  getters: {
    LoginUser: (state) => state.user,
  },
});
