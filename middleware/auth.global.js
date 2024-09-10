// export default defineNuxtRouteMiddleware(() => {
//   //   const token = localStorage.getItem("auth._token.local");

//   console.log("Checking authentication...");

//   //   if (!token) {
//   //     console.log("No token found, redirecting...");
//   //     return navigateTo("/auth/login");
//   //   }
// });
// middleware/auth.global.js
export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("auth._token.local");

  // Define paths that should be accessible without authentication
  const publicAuthRoutes = [
    "/auth/login",
    "/auth/register",
    // "/auth/forgot-password",
  ];

  // If there is no token and trying to access a protected route
  if (!token && !publicAuthRoutes.includes(to.path)) {
    return navigateTo("/auth/login");
  }

  // If there is a token and trying to access auth-related pages
  if (token && publicAuthRoutes.includes(to.path)) {
    return navigateTo("/");
  }
});
