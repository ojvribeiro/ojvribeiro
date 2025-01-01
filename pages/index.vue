<script setup lang="ts">
  import { useImage } from '@vueuse/core'
  import NewYear from '@/components/NewYear.vue'

  const image = '/img/avatar/pic.jpg'

  const isNewYear = ref(false)

  const date = ref(new Date())

  const now = ref(new Date(date.value).getTime())

  onMounted(() => {
    setInterval(() => {
      if (new Date().getFullYear() === 2025) {
        isNewYear.value = true
      }
    }, 1000)
  })

  const { isLoading } = useImage({ src: image })

  useHead({
    title: null,
  })
</script>

<template>
  <div>
    <Layout>
      <header
        :class="[
          'relative overflow-hidden',
          isNewYear === false
            ? 'bg-gradient-to-br from-brand-blue-800 via-brand-blue-950 to-brand-blue-950'
            : '',
        ]"
      >
        <NewYear />

        <Container class="mx-auto h-full">
          <div
            class="grid h-full pt-10 md:grid-cols-2 md:items-center md:gap-6 lg:pt-0"
          >
            <div
              class="col-span-2 flex items-center justify-start lg:col-span-1 lg:justify-center"
            >
              <div class="group relative px-4 sm:px-8 md:px-16">
                <Orbit class="hidden mix-blend-luminosity lg:block" />

                <Transition name="fade-zoom">
                  <div
                    v-if="!isLoading"
                    class="easing mask relative aspect-square w-[140px] select-none transition-transform delay-100 duration-300 group-hover:scale-105 md:w-[250px] xl:w-[300px]"
                  >
                    <div
                      class="absolute left-0 top-0 h-full w-full bg-[#444391]"
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
              <div class="space-y-6 pr-4 sm:pr-8 md:pr-16">
                <div>
                  <p class="font-sans font-semibold text-white/50">
                    Hi! 👋 My name is
                  </p>

                  <h1
                    class="font-reem text-4xl font-bold tracking-tighter text-white md:text-7xl"
                  >
                    Victor Ribeiro
                  </h1>
                </div>

                <div class="space-y-4 text-lg text-white/50">
                  <p>
                    I'm a creative brazilian front-end developer. <br />
                    You can
                    <Link to="/projects" class="link">see my work</Link>
                    or
                    <a
                      href="https://github.com/ojvribeiro/ojvribeiro"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      class="link"
                      >get in touch</a
                    >
                    with me.
                  </p>

                  <p>
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
