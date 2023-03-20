<template>
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/assets/icons/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/assets/icons/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/assets/icons/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/assets/icons/favicon/site.webmanifest" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </Head>

  <App />
</template>

<script setup>
  import { useHead } from '@vueuse/head'

  useHead({
    titleTemplate: titleChunk =>
      titleChunk ? `${titleChunk} - Victor Ribeiro` : 'Victor Ribeiro',
  })
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Inconsolata&family=Poppins:wght@400;700;800&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    font-family: 'DM Sans', sans-serif;
  }

  pre,
  code {
    font-family: 'Inconsolata', monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-3xl md:text-4xl xl:text-5xl font-black;

    font-family: 'Poppins', sans-serif;
  }
</style>
