<template>
  <div>
    <Head>
      <link rel="manifest" href="@/assets/icons/favicon/site.webmanifest" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
    </Head>

    <Navbar />

    <div>
      <App />
    </div>
  </div>
</template>

<script setup lang="ts">
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

  body {
    @apply bg-gradient-to-r from-brand-purple to-brand-green;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    @apply w-4;
  }

  ::-webkit-scrollbar-track {
    @apply bg-slate-800;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
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
    @apply font-black;

    font-family: 'Poppins', sans-serif;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
