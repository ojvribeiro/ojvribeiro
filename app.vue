<template>
  <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
    </Head>

    <Navbar />

    <div>
      <Page />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: titleChunk =>
      titleChunk ? `${titleChunk} › Victor Ribeiro` : 'Victor Ribeiro',
  })
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Gabarito:wght@400..900&family=Reem+Kufi:wght@700&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    font-family: 'Gabarito', sans-serif;
  }

  body {
    @apply gradient;
    overflow-y: scroll;
  }

  a.link {
    @apply border-b border-white/10 text-white transition-colors hover:border-white;
  }

  .gradient {
    @apply bg-gradient-to-br from-brand-blue-800 via-brand-blue-950 to-brand-blue-950;
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
    @apply font-reem font-black;
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
