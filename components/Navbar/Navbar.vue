<script setup lang="ts">
  import { useWindowScroll } from '@vueuse/core'

  const { y } = useWindowScroll()

  const menu = useMenu()
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 w-full px-4 py-4 text-white transition duration-300 md:px-6"
    :class="[
      y > 24
        ? 'shadow-[0_28px_20px_-28px_rgb(0_0_0_/_30%)] backdrop-blur-lg'
        : '',
    ]"
  >
    <Container>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="flex shrink-0 items-center gap-6">
            <div class="sm:hidden">
              <button @click="menu.drawer.isOpen = true">
                <Icon icon="lucide:menu" class="text-2xl" />
              </button>

              <Transition name="fade">
                <div
                  class="fixed h-screen w-screen inset-0 z-40 bg-black/60"
                  v-if="menu.drawer.isOpen"
                  @click="menu.drawer.isOpen = false"
                />
              </Transition>

              <Transition name="slide-down">
                <div
                  class="drawer fixed inset-0 z-50 flex h-[80svh] flex-col bg-gradient-to-r from-brand-purple to-brand-green backdrop-blur-xl"
                  v-show="menu.drawer.isOpen"
                >
                  <div class="flex justify-end px-4 py-4">
                    <button @click="menu.drawer.isOpen = false">
                      <Icon icon="lucide:x" class="text-2xl" />
                    </button>
                  </div>

                  <div class="grid grow place-items-center">
                    <ul class="flex flex-col gap-6 text-2xl">
                      <li>
                        <Link
                          to="/"
                          class="flex items-center gap-4"
                          @click="menu.drawer.isOpen = false"
                        >
                          <Icon icon="lucide:home" />

                          <span>Home</span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/projects"
                          class="flex items-center gap-4"
                          @click="menu.drawer.isOpen = false"
                        >
                          <Icon icon="lucide:blocks" />

                          <span>Projects</span>
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/uses"
                          class="flex items-center gap-4"
                          @click="menu.drawer.isOpen = false"
                        >
                          <Icon icon="lucide:cpu" />

                          <span>Uses</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Transition>
            </div>

            <Link to="/" class="text-white hover:text-white/70">
              <img
                src="@/assets/img/victor-ribeiro-logo-white.svg"
                alt="Logo"
                class="h-6"
              />
            </Link>
          </div>

          <ul class="menu hidden items-center gap-1 sm:flex">
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
            <a
              href="https://github.com/ojvribeiro"
              title="GitHub"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <Icon icon="iconoir:github-circle" />
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/ojvribeiro"
              title="LinkedIn"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <Icon icon="iconoir:linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://x.com/ojvribeiro"
              title="Twitter/X"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <Icon icon="iconoir:twitter" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
</template>

<style scoped lang="scss">
  ul.menu {
    li {
      a {
        @apply block rounded-lg bg-transparent px-4 py-2 transition hover:text-brand-blue-50;
      }

      .router-link-active {
        @apply bg-white/20;
      }
    }
  }

  .drawer {
    ul {
      li {
        a {
          @apply rounded-lg bg-transparent px-4 py-2 transition hover:text-brand-blue-50;
        }

        .router-link-active {
          @apply bg-white/20;
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply opacity-100 duration-300;
  }

  .fade-enter-from,
  .fade-leave-to {
    @apply opacity-0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    @apply transition-transform duration-300;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    @apply translate-x-full transform;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    @apply translate-y-0 opacity-100 transition duration-300;
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    @apply -translate-y-full opacity-0;
  }
</style>
