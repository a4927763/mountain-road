<template>
  <div class="">
    <div class="container">
      <ProductTopInfo />
      <ProductDetailInfo/>
    </div>
  </div>
</template>

<script>
import ProductTopInfo from "~/components/_page/cart/ProductTopInfo.vue";
import ProductDetailInfo from "~/components/_page/cart/ProductDetailInfo.vue";

export default {
  components: {
    ProductTopInfo,
    ProductDetailInfo,
  },
};
</script>
