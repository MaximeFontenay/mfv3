export default defineNuxtConfig({
  devtools: {
      enabled: true,
  },
  app: {
      head : {
          title: 'Maxime Fontenay - Front & Creative Developer',
          htmlAttrs: {lang: 'fr'},
          meta: [
              {charset: 'utf-8'},
              {name: 'language', content: 'FR'},
              {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
              {name: 'description', content: "Hey I'm Maxime, a french independant Front & Creative Developer, who can also do some design and UX/UI. This allows me to integrate perfectly into any team. I work remotly, currently from France, but also available to work with an international team."},
              {name: 'url', content: 'https://maximefontenay.fr'},
              {name: 'robots', content: 'index,follow'},
              {name: 'author', content: 'Maxime Fontenay'},
              {name: 'designer', content: 'Maxime Fontenay'},
              {name: 'developer', content: 'Maxime Fontenay'},
              {name: 'owner', content: 'Maxime Fontenay'},
          ],
          link: [
            {
              href: '/fonts/kenoky.ttf',
              type: 'font/ttf',
              rel: 'preload',
              as: 'font',
              crossorigin: 'anonymous'
            }
          ]
      },
  },
  css: [
      'assets/_variables.scss',
      'assets/_base.scss',
  ],
  site: {
    url: 'https://maximefontenay.fr',
  },
  components: {
      // global: true,
      dirs: ['~/components']
  },
  typescript: {
      strict: true
  },
  modules: [
      '@vueuse/nuxt',
      '@nuxtjs/i18n',
      '@nuxtjs/sitemap',
      '@nuxtjs/robots',
      'nuxt-security',
      "@tresjs/nuxt"
  ],
  vite: { 
  },
})