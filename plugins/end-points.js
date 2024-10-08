export default defineNuxtPlugin((nuxtApp) => {
  const url = {
    LOGINAdmin: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/users/register",
    CATEGORIES: "products/categortcount",
    NEWARRIVALS: "products/newarrialproducts",
    POPULARPRODUCTS: "products/popularproducts",
    CREATEPRODUCTS: "products/create",
    ALLPRODUCTS: "products/allproducts",
    PRODUCTBYID: "products/productById",
    ADDTOCART: "products/cart",
    REMOVECART: "products/removeCart",
    SENDMESSAGE: "users/contact",
    PRODUCTBYCATEGORY:"products/productbycategory"
  };

  nuxtApp.provide("API", url);
});
