<template>
  <div class="personalInfo">
    <div class="personalInfo__bg"></div>
    <div class="personalInfo__main">
      <div class="personalInfo__main__profile">
        <img class="profile-photo" src="https://fakeimg.pl/250x100/" alt="" />
        <div class="profile-camara i i-camara"></div>
        <h6 class="my-2 text-center">Shin</h6>
        <div class="flex justify-center">
          <span
            v-for="item in levelbind"
            class="i i-ribbon-star i-ribbon-star-active"
          ></span>
          <span v-for="item in levelUnbind" class="i i-ribbon-star"></span>
        </div>
      </div>
      <div class="mb-[32px] flex justify-center">
        <div class="mr-6 text-right">
          <h6 class="mb-4 leading-[40px]">姓名</h6>
          <h6 class="mb-4 leading-[40px]">性別</h6>
          <h6 class="mb-4 leading-[40px]">生日</h6>
          <h6 class="mb-4 leading-[40px]">電話</h6>
          <h6 class="mb-4 leading-[40px]">信箱</h6>
          <h6 class="leading-[40px]">詢問內容</h6>
        </div>
        <div>
          <div class="mb-4">
            <InputText :id="'name'" :value="name" />
          </div>
          <div class="mb-4 flex h-[40px] items-center">
            <div class="mr-3">
                <InputRadio
                  :id="'gender-1'"
                  :label="'Yes'"
                  :value="'yes'"
                  v-model="gender"
                />

            </div>
            <InputRadio
              :id="'gender-2'"
              :label="'No'"
              :value="'no'"
              v-model="gender"
            />
          </div>
          <div class="mb-4">
            <InputText :id="'name'" :value="name" />
          </div>
          <div class="mb-4">
            <InputText :id="'name'" :value="name" />
          </div>
          <div class="mb-4">
            <InputText :id="'name'" :value="name" />
          </div>
          <div class="">
            <InputTextArea :id="'textArea'" :value="textArea" placeholder="" />
          </div>
        </div>
      </div>
      <button class="btn btn-primary mx-auto !block">儲存設定</button>
    </div>
  </div>
</template>

<script>
import InputText from "~/components/_shared/input/InputText.vue";
import InputRadio from "~/components/_shared/input/InputRadio.vue";
import InputTextArea from "~/components/_shared/input/InputTextArea.vue";

export default {
  name: "PersonalInfo",
  components: {
    InputText,
    InputTextArea,
    InputRadio,
  },
  data() {
    return {
      personalInfo: {
        name: "Shin",
        level: 2,
      },
      name: "",
      textArea: "",
      gender: "yes",
    };
  },
  computed: {
    levelbind() {
      return this.personalInfo.level;
    },
    levelUnbind() {
      return 5 - this.personalInfo.level;
    },
  },
};
</script>

<style lang="sass" scoped>
.personalInfo
    position: relative
    width: 100%
    max-width: 785px
    margin-left: 75px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)
    padding-top: 110px
    padding-bottom: 50px
    &__bg
        position: absolute
        top: 0
        background-image: url(~/static/images/dummy/member/personal-info.jpg)
        background-size: cover
        background-repeat: no-repeat
        background-position: top
        height: 176px
        width: 100%
        z-index: -1
    &__main
        &__profile
            // width: 135px
            // height: 135px
            margin: auto
            margin-bottom: 24px
            position: relative
            width: fit-content
            .profile-photo
                border-radius: 50%
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)
                width: 135px
                height: 135px
            .profile-camara
                position: absolute
                right: 0
                width: 32px
                height: 32px
                border-radius: 50%
                overflow: hidden
                background-color: #fff
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
                display: flex
                justify-content: center
                align-items: center
                top: calc(135px - 32px)
</style>
