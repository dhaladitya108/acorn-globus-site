// https://nuxt.com/docs/api/configuration/nuxt-config
import getSiteMeta from './utils/getSiteMeta';

const meta = getSiteMeta();

export default defineNuxtConfig({
    devtools: {enabled: false},

    ssr: false,

    generate: {
        fallback: true
    },

    app: {
        head: {
            meta: [
                ...meta,
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: ''},
                {name: 'format-detection', content: 'telephone=no'},
            ]
        },
    },

    components: true,

    css: [
        '~/assets/css/bootstrap.min.css',
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        '~/assets/css/main.css'
    ],

    modules: [
        '@nuxt/content',
    ],

    hooks: {
        'content:file:beforeInsert': (document) => {
            if (document.extension === '.md') {
                const stats = require('reading-time')(document.text)
                document.readingStats = stats
            }
        },
    },

    content: {
        liveEdit: false,
    },

    // custom components
    compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('vue-')
    }
})