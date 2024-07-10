<script setup lang="ts">
  import { useImage } from '@vueuse/core'
  import { Endpoints } from '@octokit/types'

  type User = Endpoints['GET /users/{username}']['response']['data']

  const image = 'https://github.com/ojvribeiro.png'

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
              class="col-span-2 flex items-center md:justify-center lg:col-span-1"
            >
              <div class="relative px-4 sm:px-8 md:px-16">
                <Orbit class="hidden md:block" />

                <Transition name="fade-zoom">
                  <div
                    v-if="!isLoading"
                    class="ping relative aspect-square w-[100px] overflow-hidden rounded-full transition-transform lg:w-[200px] xl:w-[300px]"
                  >
                    <img
                      :src="image"
                      alt="Victor Ribeiro @ojvribeiro"
                      class="w-full object-cover"
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
                    href="https://x.com/ojvribeiro"
                    title="Twitter/X"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    <Icon icon="lucide:twitter" />
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

  .fade-zoom-enter-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  .fade-zoom-enter-from {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
