export default {
    // Target: https://go.nuxtjs.dev/config-target
    // target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'mountaion-road',
        htmlAttrs: {
        lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        script: [
            {
                src: "https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js",
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [ 
        "~/assets/sass/index.sass",
    ],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: "@/plugins/vueCommon.js",
        },
        {
            src: "@/plugins/vueScreen.js",
        },
        {
            src: "@/plugins/vue-select.js",
        },
        {   
            src: "@/plugins/vendor/aos/aos.client.js" 
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // Doc: https://vueuse.org/guide/
        "@vueuse/nuxt",
        // Doc: https://tailwindcss.com/
        "@nuxt/postcss8",
        // Doc: https://www.npmjs.com/package/@nuxtjs/svg
        "@nuxtjs/svg",

    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Doc: https://github.com/nuxt-community/style-resources-module
        "@nuxtjs/style-resources",
        // Doc: https://axios.nuxtjs.org/setup
        "@nuxtjs/axios",
        // Doc: https://image.nuxtjs.org/
        "@nuxt/image",
    ],
    styleResources: {
        sass: [
            "~assets/sass/abstracts/_variables.sass",
            "~assets/sass/abstracts/_text.sass",
        ]
    },
    router: {
        base: '/mountain-road'
    },
    generate: {
        dir: 'docs',
        subFolder: false,
    },
    build:{
        extend(config) {
            config.module.rules.push({
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            });
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
                // Doc: https://www.npmjs.com/package/postcss-easings
                "postcss-easings": {},
            },
        }

    }
   
}
