<template>
  <div class="mb-9 border-b-[1px] border-solid border-[#D9D9D9] pb-9">
    <div class="mt-[60px] flex">
      <div class="w-[40%]">
        <ProductPhotoCarousel />
      </div>
      <div class="ml-[60px] w-[60%]">
        <h4 class="mb-4">
          Arc'Teryx 始祖鳥 Beta 男款防水外套 GTX風雨衣/防水外套
        </h4>
        <p class="subtitle mb-4 !font-bold text-[#727987]">
          多用途的防水外套，採用防水、防風的 GORETEX材質 搭配C-KNIT™
          內裡，增加舒適度和透氣性
        </p>
        <div class="mb-4">
          <div
            class="mr-[7px] !font-bold text-green inline-block rounded-[6px] border-[2px] border-solid border-green py-[6px] px-[16px]"
          >
            ARC'TERYX 始祖鳥
          </div>
          <div
            class="inline-block !font-bold text-green rounded-[6px] border-[2px] border-solid border-green py-[6px] px-[16px]"
          >
            防水風雨衣（男）
          </div>
        </div>
        <div class="mb-4">
          <h6 class="mb-1">優惠售價</h6>
          <h4 class="tracking-wider text-green">NT$15960</h4>
        </div>
        <div class="activity mb-4 flex border-2 border-solid p-2">
          <div class="i i-loudspeaker mt-[7px] mr-[13px]"></div>
          <h4>
            Arc'tery 始祖鳥品牌年中慶活動！7/1~7/31單筆消費滿 $ 6,000
            送品牌限量鑰匙圈
          </h4>
        </div>
        <div class="size-block mb-4">
          <h6 class="mb-3">尺寸</h6>
          <div class="flex">
            <h5 class="mr-[10.5px] text-[#909090]">XS</h5>
            <h5 class="mr-[10.5px] text-[#909090]">S</h5>
            <h5 class="mr-[10.5px] text-[#909090]">M</h5>
            <h5 class="mr-[10.5px] text-[#909090]">L</h5>
          </div>
        </div>
        <div class="color-block mb-4">
          <h6 class="mb-3">顏色</h6>
          <div class="flex">
            <div class="mr-3 h-[34px] w-[34px] bg-[#D5761A]"></div>
            <div class="mr-5 h-[34px] w-[34px] bg-[#33374F]"></div>
            <p class="subtitle !font-bold text-[#FF0000]">庫存剩下10件</p>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="">
            <button class="btn btn-primary mr-4">立即結帳</button>
            <button class="btn btn-secound">立即結帳</button>
          </div>
          <div class="flex">
            <p class="subtitle mr-2 !font-bold">分享:</p>
            <span class="i i-facebook-green mr-2 cursor-pointer"></span>
            <span class="i i-instagram-green mr-2 cursor-pointer"></span>
            <span class="i i-line-green mr-2 cursor-pointer"></span>
            <span class="i i-link-green mr-2 cursor-pointer"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPhotoCarousel from "~/components/_page/cart/ProductPhotoCarousel.vue";

export default {
  components: {
    ProductPhotoCarousel,
  },
};
</script>

<style lang="sass" scoped>

.cursor-pointer
    cursor: pointer
</style>
