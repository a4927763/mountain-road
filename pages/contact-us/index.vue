<template>
    <div class="page">
        <div class="page__banner">
            <img src="~/static/images/others/contact-us-banner.jpg" alt="">
        </div>
        <div class="page__main">
            <div class="page__main__form">
                <SectionTitle 
                    :text="'GET IN TOUCH'"
                />
                <h6 class="text-gray-primary mb-10 mt-4">若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們將會請專人盡快為您服務。</h6>
                <form>
                    <div class="mb-5">
                        <InputText 
                            :label="`姓名<span class='require'>*</span>`" 
                            :id="'name'"
                            :value="name"
                        />
                    </div>
                    <div class="mb-5">
                        <InputText 
                            :label="`電話<span class='require'>*</span>`" 
                            :id="'phone'"
                            :value="phone"
                        />
                    </div>
                    <div class="mb-5">
                        <InputText 
                            :label="`信箱<span class='require'>*</span>`" 
                            :id="'email'"
                            :value="email"
                        />
                    </div>  
                    <div class="mb-12">
                        <InputTextArea 
                            :label="`詢問內容<span class='require'>*</span>`" 
                            :id="'textArea'" 
                            :value="textArea"
                        />
                    </div>
                    <div class="">
                        <button class="!block btn btn-primary mx-auto ">
                            送出
                        </button>
                    </div>
                </form>
                <!-- <div ref="title1"
                    v-element-visibility="(state) => $refs['title1']?.classList.toggle(
                    'animate-fade-up',
                    state,)"
                >
                    <p>若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們將會請專人盡快為您服務。</p>
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/_shared/title/SectionTitle.vue'
import InputText from '~/components/_shared/input/InputText.vue'
import InputTextArea from '~/components/_shared/input/InputTextArea.vue'

export default {

    components: {
        SectionTitle,
        InputText,
        InputTextArea
    },
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            textArea: null,
        }
    },
    methods: {
        dsfasf(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="sass" scoped>
.text-gray-primary
    color: #727987 
.page
    // background-image: url(~/static/images/others/contact-us-banner.jpg)
    // background-repeat: no-repeat
    // background-size: cover 592px
    // background-position: center top
    position: relative
    padding-top: 430px
    &__banner
        position: absolute
        width: 100%
        top: 0
        left: 0
        img
            width: 100%
            height: 592px
            object-fit: cover
            
    &__main
        position: relative
        max-width: 1064px
        width: 75%
        background-color: #fff
        padding: 45px
        margin: auto
        @screen lg
            padding: 30px
        &__form
            background-image: url(~/static/images/others/contact-us-form-bg.jpg)
            background-size: cover
            background-repeat: no-repeat
            padding: 88px 168px 68px
            @screen xl
                padding: 60px 80px 
</style>