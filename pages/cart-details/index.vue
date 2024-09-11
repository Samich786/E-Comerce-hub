<template>
  <div class="h-screen">
    <div class="grid lg:grid-cols-3 gap-10 md:grid-cols-1 px-8 py-5 pb-10">
      <div class="col-span-2 bg-white">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead class="bg-secondary text-white">
              <tr>
                <th></th>
                <th>Products</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <!-- row 2 -->
              <tr class="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex items-center bg-white justify-between">
          <div>
            <input
              type="text"
              placeholder="Coupon Code"
              class="border-none bg-white w-full focus:outline-none focus:border-none focus:ring-0 px-3"
            />
          </div>
          <div
            class="bg-primary text-secondary px-2.5 py-3 border border-primary"
          >
            <span>Apply Coupon</span>
          </div>
        </div>
        <div class="mt-5 flex items-center">
          <!-- Title Container -->
          <div class="flex-shrink-0">
            <span class="text-[25px] font-semibold text-[#3D464D]"
              >CART SUMMARY</span
            >
          </div>
          <!-- Dashed Border Container -->
          <div
            class="flex-grow border-b border-dashed border-[#BEC5CB] ml-4 mt-2"
          ></div>
        </div>
        <div class="mt-5 bg-white px-5 py-5">
          <div
            class="flex justify-between font-semibold items-center text-secondary mt-3"
          >
            <span>Subtotal</span>
            <span class="text-lg font-semibold text-secondary">$0.00</span>
          </div>
          <div
            class="flex justify-between font-semibold items-center text-secondary mt-3 mb-3"
          >
            <span>Shipping</span>
            <span class="text-lg font-semibold text-secondary">$0.00</span>
          </div>
          <hr />
          <div
            class="flex text-xl justify-between font-bold items-center text-secondary mt-3"
          >
            <span>Total</span>
            <span class="text-xl font-bold text-secondary">$0.00</span>
          </div>
          <div
            class="text-secondary font-bold text-center mt-5 bg-primary px-3 py-3"
          >
            <span>Proceed to Checkout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
