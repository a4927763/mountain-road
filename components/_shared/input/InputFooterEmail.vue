<template>
    <div class="">
        <div class="subscript-btn">
            <input
                ref="email"
                class="subscript-btn__input" 
                type="email"
                :placeholder="'輸入E-mail  獲得最新消息'"
                v-model.trim="emailVal"
                @keyup="error = '', success = false"
            />
            <button class="subscript-btn__submit" type="submit" @click="subscribe">
                <p>
                    訂閱
                </p>
            </button>
        </div>
        <p v-if="error" class="tx-body-3 text-danger pt-1">{{error}}</p>
        <p v-if="success" class="tx-body-3 text-primary pt-1">訂閱成功</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emailVal: '',
            error: '',
            success: false,
        }
    },
    methods: {
        checkValid() {
            const regex = /^\w+([-\.\+]\w+)*\@[^\W_]+([\.|-][^\W_]+)*\.[^\W0-9_]+$/;
            let email = this.$refs.email.value;
            if (!regex.test(email)) {
                this.error = 'error validation_email'
            } else {
                this.error = "";
            }
        },
        async subscribe() {
            this.checkValid()
            if(this.error) return

            const params = {};
            params['email'] = this.$refs.email.value
            // const config = {params}
            const url = `subscribe`;

            try {
                const { data } = await this.$axios.post(url, params);
                const res = data.data;
                if(res.success) {
                    this.success = true


                }
            } catch(e) {
                console.log(e)
                if(e) {
                    this.success = false
                    this.error = 'error validation_email'
                }
            }

        }
    }
}
</script>
<style lang="sass" scoped>

.subscript-btn
    height: 100%
    font-size: 0
    height: 48px
    display: flex
    align-items: center
    position: relative
    width: fit-content
    &__input
        width: 471px
        padding: 12px 0px 12px 24px
        border: 1px solid #DEDEDE
        border-right: none
        border-radius: 5px
        height: 100%
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25)

        font-size: 16px
        line-height: 1.5
        font-weight: normal

        outline: none
        transition: border-color .2s ease-in-out
        &:focus
            border: 1px solid $primary

    &__submit
        position: absolute
        right: 0
        width: 120px
        height: 100%
        background-color: $primary
        border-radius: 0 5px 5px 0
        border: 1px solid $primary
        transition: border-color .2s ease-in-out, background-color .2s ease-in-out

        font-size: 16px
        line-height: 1.5
        font-weight: normal

        &:hover
            background-color: $white
            border: 1px solid $primary
            p
                color: $primary
        p
            color: $white
            font-weight: bold
</style>
