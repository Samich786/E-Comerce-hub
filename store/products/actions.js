// stores/auth/actions.js
export const actions = {
  async fetchCategories( payload) {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.CATEGORIES);
      this.categories = response.data.data.categories;
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchNewArrivalsData(payload) {
    console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.NEWARRIVALS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchPopularData(payload) {
    console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchPopularData(payload) {
    console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchAllProductsData(payload) {
    try {
      const response = await $apiClient.get($API.ALLPRODUCTS+`?page=${payload.filter.page}&limit=${payload.filter.limit}&isPopular=${payload.filter.isPopular}&isNewArrival=${payload.filter.isNewArrival}&discount=${payload.filter.discount}&category=${payload.filter.categoriesType}`);
      this.allProducts = response.data.data.data;
      return response;
    } catch (error) {
      return error;
    }
  },
  async getProductById(payload) {
    try {
      const response = await $apiClient.get($API.PRODUCTBYID+`/${payload}`);
      this.productById = response.data.data.data.product;
      return response;
    } catch (error) {
      return error;
    }
  },
  async addToCartData(payload) {
    try {
      const response = await $apiClient.post($API.ADDTOCART, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
  async createProduct(payload) {
    try {
      const response = await $apiClient.post($API.CREATEPRODUCTS, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
};
