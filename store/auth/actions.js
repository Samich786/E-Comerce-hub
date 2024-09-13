// stores/auth/actions.js
export const actions = {
  async logout() {
    const { $apiClient, $API } = useNuxtApp();
    try {
      const response = await $apiClient.post($API.LOGOUT);
      localStorage.removeItem("auth._token.local");
      localStorage.removeItem("refreshToken");
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

      localStorage.setItem(
        "auth._token.local",
        response.data.data.data.accessToken
      );
      localStorage.setItem(
        "refreshToken",
        response.data.data.data.refreshToken
      );
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
