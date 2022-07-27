<template>
    <div class="default-layout">
        <Header />
        <Nuxt />
        <!-- <Footer /> -->
    </div>
</template>
<script>
import Header from "~/components/_shared/header/Header.vue";

export default {
    components: {
        Header
    }
}

</script>