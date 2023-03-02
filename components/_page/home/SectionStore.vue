<template>
  <div class="store-page">
    <div class="left-block">
      <div class="left-block__img"></div>
    </div>
    <div class="right-block">
      <div class="mb-[30px]">
        <span class="i i-shop i-shop-large"></span>
      </div>
      <div class="mb-[30px]">
        <SectionTitle color="white" text="精選商品" />
      </div>
      <h6 class="mb-[30px]">
        精選世界各地優質品牌、從近山郊遊、登山健行到專業探險、各式戶外裝備，精選世界優質商品，從一日健行、多日縱走到專業攀登，超過萬件戶外裝備，提供一站式購足的服務。
      </h6>
      <button class="btn btn-primary">立即探索</button>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/_shared/title/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
};
</script>

<style lang="sass" scoped>
.store-page
    display: flex
    background-color: #2F2F2F
    color: $white
    .left-block, .right-block
        width: 50%
    .left-block
        &__img
            width: 100%
            height: 100%
            background-image: url("~/static/images/dummy/home/store-banner.jpg") 
            background-position: center
            background-size: cover
    .right-block
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        padding: 180px 80px
</style>
