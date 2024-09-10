export default defineNuxtPlugin((nuxtApp) => {
    const url = {
      LOGINAdmin: "/auth/login",
      REGISTER: "/users/register",
      CATEGORIES: "products/categortcount",
      NEWARRIVALS: "products/newarrialproducts",
      POPULARPRODUCTS: "products/popularproducts",
      CREATEPRODUCTS: "products/create",
      ALLPRODUCTS: "products/allproducts",
      PRODUCTBYID: "products/productById",
      ADDTOCART: "products/cart",
    };
  
    nuxtApp.provide("API", url);
  });
  