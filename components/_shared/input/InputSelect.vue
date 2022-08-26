<template>
    <div>
        <v-select 
            :options="options"
        ></v-select>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: []
        }
    }
}
</script>