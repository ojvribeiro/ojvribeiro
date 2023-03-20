<template>
  <Head>
    <title>Home</title>
  </Head>

  <Layout name="default">
    <header
      class="h-screen bg-gradient-to-r from-brand-purple to-brand-green overflow-hidden"
    >
      <Container class="h-full">
        <div class="grid grid-cols-2 gap-8 h-full pt-10 lg:pt-0">
          <div
            class="col-span-2 lg:col-span-1 flex items-center justify-center"
          >
            <div class="relative">
              <Orbit />

              <div
                class="ping relative rounded-full overflow-hidden aspect-square w-[100px] lg:w-[200px] xl:w-[300px] ring-4 transition-transform"
              >
                <Image
                  src="/assets/img/avatar/me.jpg"
                  alt="Victor Ribeiro @ojvribeiro"
                  class="w-full object-cover"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>

          <div class="col-span-2 lg:col-span-1 flex items-center">
            <div class="px-4 sm:px-8 md:px-16 space-y-6">
              <div>
                <p class="font-sans text-white/50 font-semibold">Olá! Eu sou o</p>

                <h1 class="text-white text-4xl md:text-6xl">Victor Ribeiro</h1>
              </div>

              <div>
                <p class="text-white text-lg">
                  Sou um desenvolvedor front-end que ama codar e ama mais ainda o
                  JavaScript desde 2010. ❤️
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
                  href="https://twitter.com/ojvribeiro"
                  title="Twitter"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                >
                  <Icon icon="iconoir:twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  </Layout>
</template>

<style scoped lang="scss">
  .social-icons {
    @apply mt-8 flex gap-5 text-4xl;

    a {
      @apply transition duration-200 text-blue-300 hover:text-white hover:scale-110;
    }
  }
</style>
