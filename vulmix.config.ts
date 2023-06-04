import { defineVulmixConfig } from './.vulmix/utils/defineVulmixConfig'

export default defineVulmixConfig({
  lang: 'pt-BR',
  head: {
    meta: [
      {
        charset: 'utf-8',
      },

      {
        name: 'description',
        content: 'Victor Ribeiro is a front-end web developer.',
      },

      {
        name: 'author',
        content: 'Victor Ribeiro',
      },

      {
        property: 'title',
        content: 'Victor Ribeiro',
      },

      {
        property: 'og:type',
        content: 'website',
      },

      {
        property: 'og:url',
        content: 'https://ojvribeiro.me/',
      },

      {
        property: 'og:title',
        content: 'Victor Ribeiro',
      },

      {
        property: 'og:description',
        content: 'Victor Ribeiro is a front-end web developer.',
      },

      {
        property: 'og:image',
        content:
          'https://ojvribeiro.me/assets/icons/favicon/android-chrome-512x512.png',
      },

      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },

      {
        property: 'twitter:url',
        content: 'https://ojvribeiro.me/',
      },

      {
        property: 'twitter:title',
        content: 'Victor Ribeiro',
      },

      {
        property: 'twitter:description',
        content: 'Victor Ribeiro is a front-end web developer.',
      },

      {
        property: 'twitter:image',
        content:
          'https://ojvribeiro.me/assets/icons/favicon/android-chrome-512x512.png',
      },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/assets/icons/favicon/apple-touch-icon.png',
      },

      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/assets/icons/favicon/favicon-32x32.png',
      },

      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/assets/icons/favicon/favicon-16x16.png',
      },

      {
        rel: 'manifest',
        href: '/assets/icons/favicon/site.webmanifest',
      },
    ],
  },
})
