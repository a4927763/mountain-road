<template>
    <div class="input-text">
        <label v-show="label" 
            :for="id" 
            class="pb-2 tx-h6" 
            v-html="label" 
        />
        <input 
            type="text"
            :id="id"
            :value="value"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder"
        >

        <div
            class="text-danger pt-1"
            v-show="isError"
            v-html="error_msg || defaultErrorMsg"
        />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: () => "",
        },
        label: {
            default: '',
            type: String
        },
        value: {
            type: [String, Number],
            default: () => "",
        },
        placeholder: {
            default: '',
            type: String
        },

        // error //
        isError: {
            type: Boolean,
            default: () => false,
        },
        error_msg: {
            type: String,
            default: () => "",
        },
        
    },
    computed: {
        defaultErrorMsg() {
            return 'default Error Msg'
        },
    }
}
</script>

<style lang="sass" scoped>
.input-text
    display: flex
    flex-direction: column
    input
        box-shadow: 0px 0px 3.65161px rgba(0, 0, 0, 0.25)
        border-radius: 5px
        

::v-deep(.require)
    color: red

</style>