<template>
  <div>
    <div>
      <div class="mb-[45px] flex">
        <div
          class="w-[33%] border-[1px] border-solid border-green bg-green p-4 text-center font-bold text-white"
        >
          產品介紹
        </div>
        <div
          class="w-[33%] border-[1px] border-x-0 border-solid border-[#D9D9D9] bg-white p-4 text-center font-bold text-green"
        >
          規格說明
        </div>
        <div
          class="w-[33%] border-[1px] border-solid border-[#D9D9D9] bg-white p-4 text-center font-bold text-green"
        >
          購物須知
        </div>
      </div>
      <div>
        <SectionTitle color="black" :align="false" text="產品介紹" />
        <p class="mt-8 mb-4">
          Arc'Teryx 始祖鳥 登山健行GTX風雨衣/登山衣 BETA JACKET
        </p>
        <ul class="mb-12 pl-5">
          <li class="list-disc leading-9">
            採用防風防水且透氣的 GORE-TEX 面料提供全面抗候防護。
          </li>
          <li class="list-disc  leading-9">
            GORE-TEX 面料配 C-KNIT™ 內裡，觸感柔軟，安靜，並提供優異的透氣度。
          </li>
          <li class="list-disc leading-9">簡約的兜帽附一個快速調節扣。</li>
          <li class="list-disc leading-9">雙插手口袋，內置熱壓安全口袋，可收納小物。</li>
          <li class="list-disc leading-9">Vislon 主拉鍊。</li>
          <li class="list-disc leading-9">兩個可調節的下擺抽繩，可防止寒氣入侵。</li>
          <li class="list-disc leading-9">修身版型及立體剪裁提供活動靈活性。</li>
        </ul>
        <div class="mb-10 flex">
          <img
            class="mr-3"
            src="~/static/images/dummy/cart/product-img-1.jpg"
            alt=""
          />
          <img src="~/static/images/dummy/cart/product-img-2.jpg" alt="" />
        </div>
        <p>
          多用途的防水外套，採用防水、防風的 GORETEX材質搭配C-KNIT™
          內裡，增加舒適度和透氣性
        </p>
        <div class="mt-10 mb-3 flex">
          <img
            class="mr-3"
            src="~/static/images/dummy/cart/product-img-1.jpg"
            alt=""
          />
          <img src="~/static/images/dummy/cart/product-img-2.jpg" alt="" />
        </div>
        <div class="mb-10 flex">
          <img
            class="mr-3"
            src="~/static/images/dummy/cart/product-img-1.jpg"
            alt=""
          />
          <img src="~/static/images/dummy/cart/product-img-2.jpg" alt="" />
        </div>
        <p class="mb-10">
          Beta
          的多功能性讓您可以自由探索以自己的方式，與山區自然的聯繫，徒步穿越樹木海洋。
          取代原有 ZETA SL 防水外套，重量更輕，採用防水、防風的 GORETEX 面料，
          搭配 C-KNIT™
          內裡，增加舒適度和透氣性，經久防水和防風，安靜、柔軟且經過精心設計，可增強透氣性。
          流線型帽兜只需輕輕一拉即可快速調整，剪裁合身可容納輕薄的內層，帶有高機動性和自由度。
        </p>
        <div class="mb-12">
          <img src="~/static/images/dummy/cart/product-img-3.jpg" alt="" />
        </div>
        <SectionTitle color="black" :align="false" text="規格說明" />
        <p class="mt-8 mb-12">
          Arcteryx 始祖鳥 Beta 男款防水外套/雨衣 29090 <br />
          重量: 300g<br />
          剪裁: 修身剪裁<br />
          材質: N30p 3L GORE-TEX 搭配C-KNIT™ 內裡
        </p>
        <img
          class="mb-12"
          src="~/static/images/dummy/cart/product-img-4.jpg"
          alt=""
        />
        <img
          class="mb-12"
          src="~/static/images/dummy/cart/product-img-5.jpg"
          alt=""
        />
        <SectionTitle color="black" :align="false" text="購物須知" />
        <div class="mt-8">
          <ul class="mb-12 pl-5">
            <li class="list-disc  leading-9">
              商品圖因拍攝光線、環境，與螢幕顯示差異，實物與圖片存在難以克服的程度色差，請依實際商品為準。
            </li>
            <li class="list-disc leading-9">
              極小的污點、線頭、輕微脫線、尺寸+-2cm的誤差，在商品驗貨標準都是可接受的範圍，並不屬於瑕疵情形。
            </li>
            <li class="list-disc leading-9">
              付款後，商品將於隔日3~5個工作天(不含六日與國定假日)內到府；超商配送約3~7個工作天，若為急件請提前與網拍人員聯絡。
            </li>
            <li class="list-disc leading-9">
              商品圖因拍攝光線、環境，與螢幕顯示差異，實物與圖片存在難以克服的程度色差，請依實際商品為準。
            </li>
            <li class="list-disc leading-9">
              商品僅提供指定配送時段，而實際到貨時間請依物流中心作業為準。
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mb-[68px]">
      <SectionTitle color="black" :align="true" text="猜你喜歡" />
    </div>
    <div class="client-swiper-wrapper ">
      <div
        @click="slideMove(-1)"
        class="swiper-btn swiper-btn-left flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-white/80 shadow-lg"
      >
        <span class="i i-carousel-left i-filter-white"></span>
      </div>
      <div
        @click="slideMove(1)"
        class="swiper-btn swiper-btn-right flex h-10 w-10 cursor-pointer items-center justify-center rounded-[50%] bg-white/80 shadow-lg"
      >
        <span class="i i-carousel-right i-filter-white"></span>
      </div>
      <client-only>
        <div ref="banner-swiper" class="swiper !p-[3px]">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, i) in bannerList"
              :key="'card-key' + i"
            >
              <ProductCard :type="'product'" />
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "~/components/_shared/title/SectionTitle.vue";
import ProductCard from '~/components/_shared/card/ProductCard.vue'

export default {
  components: {
    SectionTitle,
    ProductCard
  },
  data() {
    return {
      mySwiper: null,
      focusIndex: 0,
      bannerList: [
        {
          url: require("~/static/images/dummy/home/banner-1.jpg"),
          id: 1,
          title: "BORN TO BE WILD",
          description:
            "Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/home/banner-2.jpg"),
          id: 2,
          title: "2 BORN TO BE WILD",
          description:
            "2 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/home/banner-3.jpg"),
          id: 3,
          title: "333 BORN TO BE WILD",
          description:
            "3 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/home/banner-4.jpg"),
          id: 4,
          title: "444 BORN TO BE WILD",
          description:
            "4 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
        {
          url: require("~/static/images/dummy/home/banner-5.jpg"),
          id: 5,
          title: "555 BORN TO BE WILD",
          description:
            "5 Outdoor專業選物店，提供各式戶外活動行程及登山、露營配備，跟我們一起走進大自然，探索山林之美！",
        },
      ],
    };
  },
  computed: {
    activeItem() {
      return this.bannerList[this.focusIndex];
    },
  },
  methods: {
    onSlideChange() {
      this.focusIndex = this.mySwiper?.realIndex;
    },
    slideMove(move) {
      move <= 0 ? this.mySwiper.slidePrev() : this.mySwiper.slideNext();
    },
    initSwiper() {
      this.mySwiper = new Swiper(this.$refs["banner-swiper"], {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        on: {
          realIndexChange: this.onSlideChange,
        },
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(this.initSwiper, 0);
    });
  },
};
</script>

<style lang="sass" scoped>
.list-style-unset
    list-style: unset


.client-swiper-wrapper
    position: relative
    .swiper-btn-left
        position: absolute
        z-index: 10
        background: #b5b5b5
        right: calc(100% + 45px)
        top: 50%
        transform: translate(0, -50%)

    .swiper-btn-right
        position: absolute
        z-index: 10
        background: #b5b5b5
        left: calc(100% + 45px)
        top: 50%
        transform: translate(0, -50%)
</style>
