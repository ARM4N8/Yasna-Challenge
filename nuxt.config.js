export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Yasna Challenge',
    titleTemplate: 'YC | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yasna challenge ' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: 'icon.png',
      },
    ],
  },

  pwa: {
    icon: {
      fileName: 'icon.png',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#28b044', height: '3px' },

  router: {
    base: '/',
    linkExactActiveClass: 'active',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/lib/font-awesome/css/all.min.css', 'assets/sass/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/global', '~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.realworld.io/api/',
  },

  auth: {
    strategies: {
      userLogin: {
        scheme: 'local',
        token: {
          property: 'user.token',
          global: true,
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post',
          },
          logout: false,
          user: { url: '/user', method: 'get' },
        },
        redirect: {
          login: '/login',
          logout: '/',
          callback: false,
          home: false,
        },
      },
    },
    fullPathRedirect: true,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        expires: 30,
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  toast: {
    position: 'bottom-center',
    duration: 4000,
    containerClass: 'shadow',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: process.env.NODE_ENV === 'production',
  },
}
