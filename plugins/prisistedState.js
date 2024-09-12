// /plugins/persistedState.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(({ store }) => {
    const storedState = localStorage.getItem(store.$id);
    if (storedState) {
      store.$patch(JSON.parse(storedState));
    }

    store.$subscribe((mutation, state) => {
      const persistState = {
        carts: state.carts, // Specify which state to persist
      };
      localStorage.setItem(store.$id, JSON.stringify(persistState));
    });
  });
});
