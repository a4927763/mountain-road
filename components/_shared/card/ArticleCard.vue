<template>
  <nuxt-link to="/cart/cartDetail">
    <div class="card">
      <div>
        <div class="card__img">
          <img src="~/static/images/dummy/cart/article-img-1.jpg" alt="" />
        </div>

        <div class="card__text">
          <h5 class="mb-1">
            【登山知識】參加登山團前你該知道的事 撤退只能靠自己！
          </h5>
          <p class="line-clamp-5">
            對新手而言，我們到底要怎樣選擇路線、選擇適合自己的團體呢？因為登山社團的發達，大家常常看到高手在放百岳大景美圖，看著看著也會想去，很像唾手可得，但這些路線真的適合自己嗎，看著看著也會想去，很像唾手可得，但這些路線真的適？
          </p>
        </div>
      </div>

      <div class="card__footer">
        <div class="card__footer__author">
          <div class="card__footer__author__profile mr-2">
            <img src="~/static/images/dummy/cart/photo-sticker.jpg" alt="" />
          </div>
          <p>Rita Yang</p>
        </div>
        <div class="card__footer__date">
          <span class="i i-time-circle mr-2 pt-[3px]"></span>
          <p>2022/05/27</p>
        </div>
        <div class="card__footer__like">
          <span class="i i-heart mr-2 pt-[3px]"></span>
          收藏
        </div>
        <div class="card__footer__share">
          <span class="i i-share mr-2 pt-[3px]"></span>
          分享
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "ArticleCard",
};
</script>

<style lang="sass" scoped>
.card
    box-shadow: 0px 0px 2.61248px rgb(0 0 0 / 25%)
    border-radius: 5px
    display: flex
    flex-direction: column
    justify-content: space-between
    background-color: #fff
    overflow: hidden
    transition: all 0.3s
    cursor: pointer
    &:hover
        box-shadow: 0px 0px 4px rgb(0 0 0 / 60%)

    &__img
        position: relative
        width: 100%
        padding-bottom: 67.17%
        height: 0
        img
            position: absolute
            width: 100%
            height: 100%
            object-fit: cover

    &__text
        padding: 20.5px 20.5px 17px

    &__footer
        display: flex
        align-items: center
        justify-content: space-between
        min-height: 54px
        box-shadow: 0px 0px 2.40645px rgba(0, 0, 0, 0.18)
        border-radius: 0 0 5px 5px
        padding: 0 22px
        flex-wrap: wrap
        &__author
            display: flex
            align-items: center
            margin-right: 5px
            &__profile
                margin-top: 3px
                width: 19.25px
                height: 19.25px
                border-radius: 50%
                overflow: hidden
                img
                    width: 100%
                    height: 100%
                    object-fit: cover
        &__date
            display: flex
            align-items: center
            margin-right: 5px

        &__like
            display: flex
            margin-right: 5px
            align-items: center
        &__share
            display: flex
            align-items: center
</style>
