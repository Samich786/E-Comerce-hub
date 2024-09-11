// stores/auth/actions.js
export const actions = {
  async logout() {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.post($API.LOGOUT);
      localStorage.removeItem("auth._token.local");
      this.user = null;
      this.token = null;
      return response;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
  async registerRequest(payload) {
    const { $apiClient } = useNuxtApp();

    try {
      const response = await $apiClient.post("/users/register", payload);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
    }
  },
  async loginRequest(payload) {
    const { $apiClient } = useNuxtApp();
    try {
      const response = await $apiClient.post("/auth/login", payload);
      this.token = response.data.data.data.token;
      localStorage.setItem("auth._token.local", this.token);
      await this.fetchUserData(); // Call another action directly
      return response;
    } catch (error) {
      console.error("Login failed:", error);
    }
  },
  async fetchUserData() {
    const { $apiClient } = useNuxtApp();
    try {
      const response = await $apiClient.get("/auth/me");
      this.user = response.data.data.data;
    } catch (error) {
      console.error("Fetch user data failed:", error);
    }
  },
};
