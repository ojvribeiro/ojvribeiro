<script setup lang="ts">
  import { useImage } from '@vueuse/core'

  const image = '/img/avatar/pic.jpg'

  const { isLoading } = useImage({ src: image })

  useHead({
    title: null,
  })
</script>

<template>
  <div>
    <Layout>
      <header>
        <Container class="mx-auto h-full">
          <div
            class="grid h-full pt-10 md:grid-cols-2 md:items-center md:gap-8 lg:pt-0"
          >
            <div
              class="col-span-2 flex items-center md:justify-end lg:col-span-1"
            >
              <div class="group relative px-4 sm:px-8 md:px-16">
                <Orbit class="hidden md:block" />

                <Transition name="fade-zoom">
                  <div
                    v-if="!isLoading"
                    class="easing mask relative aspect-square w-[140px] select-none transition-transform delay-100 duration-300 group-hover:scale-105 lg:w-[250px] xl:w-[300px]"
                  >
                    <div
                      class="absolute left-0 top-0 h-full w-full bg-brand-blue-950"
                    />

                    <img
                      :src="image"
                      alt="Victor Ribeiro @ojvribeiro"
                      class="w-full object-cover mix-blend-luminosity"
                      width="300"
                      height="300"
                    />
                  </div>
                </Transition>
              </div>
            </div>

            <div class="col-span-2 flex md:items-center lg:col-span-1">
              <div class="space-y-6 px-4 sm:px-8 md:px-16">
                <div>
                  <p class="font-sans font-semibold text-white/50">
                    Hi! 👋 My name is
                  </p>

                  <h1 class="text-4xl text-white md:text-6xl">
                    Victor Ribeiro
                  </h1>
                </div>

                <div>
                  <p class="text-lg text-white">
                    I'm a creative brazilian front-end developer.
                  </p>

                  <p></p>

                  <p class="text-base text-white/50">
                    This website is
                    <a
                      href="https://github.com/ojvribeiro/ojvribeiro"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      class="link"
                      >open-source</a
                    >!
                    <Icon icon="fluent-emoji-flat:red-heart" />
                  </p>
                </div>

                <div>
                  <ul class="text-white/50">
                    <li>
                      <div class="flex items-center gap-2">
                        <Icon icon="bx:chevron-right" />
                        JS
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center gap-2">
                        <Icon icon="bx:chevron-right" />
                        CSS / Sass
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center gap-2">
                        <Icon icon="bx:chevron-right" />
                        Vue / Nuxt
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center gap-2">
                        <Icon icon="bx:chevron-right" />
                        Bootstrap / Tailwind / Materialize
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center gap-2">
                        <Icon icon="bx:chevron-right" />
                        Webpack (Laravel Mix) / Vite
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="social-icons">
                  <a
                    href="https://github.com/ojvribeiro"
                    title="GitHub"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    <Icon icon="iconoir:github-outline" />
                  </a>

                  <a
                    href="https://linkedin.com/in/ojvribeiro"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    <Icon icon="iconoir:linkedin" />
                  </a>

                  <a
                    href="https://bsky.app/profile/ojvribeiro.me"
                    title="Bluesky"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    <Icon icon="ri:bluesky-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </Layout>
  </div>
</template>

<style scoped lang="scss">
  .social-icons {
    @apply mt-8 flex gap-5 text-4xl;

    a {
      @apply text-blue-300 transition duration-200 hover:text-white;
    }
  }

  .easing {
    transition-timing-function: cubic-bezier(0.52, 0, 0.38, 2.12);
  }

  .mask {
    mask-image: url('/img/hexagon.svg');
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: center;

    animation-name: rotate;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;

    img {
      animation-name: rotate;
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: normal;
    }
  }

  .fade-zoom-enter-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  .fade-zoom-enter-from {
    opacity: 0;
    transform: scale(0.9);
  }

  @keyframes rotate {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
</style>
