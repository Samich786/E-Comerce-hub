// stores/auth/actions.js
export const actions = {
  async fetchCategories(payload) {
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
    // console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.NEWARRIVALS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchPopularData(payload) {
    // console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchPopularData(payload) {
    // console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.POPULARPRODUCTS);
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchAllProductsData(payload) {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const { page, limit, isPopular, isNewArrival, discount, categoriesType } =
        payload.filter;
      console.log(
        page,
        limit,
        isPopular,
        isNewArrival,
        discount,
        categoriesType
      );

      const response = await $apiClient.get(
        $API.ALLPRODUCTS +
          `?page=${page}&limit=${limit}&isPopular=${isPopular}&isNewArrival=${isNewArrival}&discount=${discount}&category=${categoriesType}`
      );
      this.allProducts = response.data.data.data;
      return response;
    } catch (error) {
      return error;
    }
  },
  async getProductById(payload) {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.PRODUCTBYID + `/${payload}`);
      this.productById = response.data.data.data.product;
      return response;
    } catch (error) {
      return error;
    }
  },
  async addToCartData(payload) {
    // console.log(payload);

    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.post($API.ADDTOCART, payload);
      await this.fetchAllCarts();
      return response;
    } catch (error) {
      return error;
    }
  },
  async removeFromCartData(payload) {
    console.log(payload.productId);

    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.delete($API.REMOVECART, {
        data: { productId: payload.productId },
      });
      await this.fetchAllCarts();
      return response;
    } catch (error) {
      return error;
    }
  },
  async fetchAllCarts(payload) {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.get($API.ADDTOCART);
      // console.log(response.data.data);

      this.carts = response.data.data.cart;
      return response;
    } catch (error) {
      return error;
    }
  },
  async createProduct(payload) {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.post($API.CREATEPRODUCTS, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
  async sendMessage(payload) {
    console.log(payload);
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.post($API.SENDMESSAGE, payload);
      return response;
    } catch (error) {
      return error;
    }
  },
};
