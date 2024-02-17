<script setup lang="ts">
  import { useWindowScroll } from '@vueuse/core'

  const { y } = useWindowScroll()
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-r from-brand-purple/50 to-brand-green/50 px-4 py-4 text-white transition duration-300 md:px-6"
    :class="[
      y > 24
        ? 'shadow-[0_28px_20px_-28px_rgb(0_0_0_/_30%)] backdrop-blur-lg'
        : '',
    ]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="font-incosolata text-2xl font-bold">
          <Link to="/" class="text-white hover:text-white/70">
            <img
              src="@/assets/img/victor-ribeiro-logo-white.svg"
              alt="Logo"
              class="h-6"
            />
          </Link>
        </div>

        <ul class="menu flex items-center gap-1">
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="/projects"> Projects </Link>
          </li>

          <li>
            <Link to="/uses"> Uses </Link>
          </li>
        </ul>
      </div>

      <ul class="flex items-center gap-3 text-3xl">
        <li>
          <a href="https://github.com/ojvribeiro" target="_blank">
            <Icon icon="iconoir:github-circle" />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com/in/ojvribeiro" target="_blank">
            <Icon icon="iconoir:linkedin" />
          </a>
        </li>

        <li>
          <a href="https://x.com/ojvribeiro" target="_blank">
            <Icon icon="iconoir:x" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  ul.menu {
    li {
      a {
        @apply block rounded-lg bg-transparent px-4 py-2 backdrop-blur-md transition hover:bg-white/10;
      }

      .router-link-active {
        @apply bg-white/20;
      }
    }
  }
</style>
