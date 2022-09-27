<template>
    <div>
        <v-select 
            label="value"
            :value="selected"
            :options="options"
            :placeholder="placeholder"
        ></v-select>
    </div>
</template>

<script>
export default {
    props: {
        selected: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: ''
        }
    }
}
</script>