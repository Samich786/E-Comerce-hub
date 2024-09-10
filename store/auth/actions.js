// stores/auth/actions.js
export const actions = {
  logout() {
    localStorage.removeItem("auth._token.local");
    this.user = null;
    this.token = null;
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
      this.user = response.data;
    } catch (error) {
      console.error("Fetch user data failed:", error);
    }
  },
};
