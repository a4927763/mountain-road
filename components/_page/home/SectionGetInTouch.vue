<template>
    <div class="page">
        <div class="container">
            <div class="page__main">
                <div class="page__left">
                    <div class="page__left__title">
                        <h4 class="">GET IN TOUCH</h4>
                        <div class="line"></div>
                    </div>
                    <h6 class="page__left__content">若您有任何需要我們服務的地方，請填寫以下表單表達您的意見，我們將會請專人盡快為您服務。</h6>
                    <button class="btn btn-primary">
                        點我看更多
                    </button>
                </div>
                <div class="page__right">
                    <div class="form">
                        <div class="mb-5">
                            <InputText 
                                :label="'姓名'" 
                                :id="'name'"
                                :value="name"
                            />
                            
                        </div>
                        <div class="mb-5">
                            <InputText 
                                :label="'電話'" 
                                :id="'phone'"
                                :value="phone"
                            />
                        </div>
                        <div class="mb-5">
                            <InputText 
                                :label="'信箱'" 
                                :id="'email'"
                                :value="email"
                            />
                        </div>  
                        <div class="mb-12">
                            <InputTextArea 
                                :label="'詢問內容'" 
                                :id="'textArea'" 
                                :value="textArea"
                            />
                        </div>
                        <div class="">
                            <button class="!block btn btn-primary mx-auto ">
                                送出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import InputText from '~/components/_shared/input/InputText.vue'
import InputSelect from '~/components/_shared/input/InputSelect.vue'
import InputEmail from '~/components/_shared/input/InputEmail.vue'
import InputTextArea from '~/components/_shared/input/InputTextArea.vue'


export default {
    components: {
        InputText,
        InputSelect,
        InputEmail,
        InputTextArea,
    },
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            textArea: null,
        }
    }
}
</script>

<style lang="sass" scoped>
.page
    background-image: url(~/static/images/others/home-touch-banner.jpg)
    background-repeat: no-repeat
    background-size: cover
    background-position: center center
    &__main
        display: flex
        justify-content: center
        align-items: center
        padding: 60px 0
    &__left
        text-align: center
        padding: 30px
        max-width: 615px
        &__title
            margin-bottom: 25px
            h4
                margin-bottom: 12px
                color: $color-primary-1
            .line
                width: 90.5px
                height: 12px
                background: $color-primary-1
                margin: auto
        &__content
            color: #727987
            margin-bottom: 25px

.form
    color: black
    background-color: #fff
    padding: 45px 50px 40px
    border-radius: 5px
</style>