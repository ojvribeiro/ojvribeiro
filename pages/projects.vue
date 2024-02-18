<script setup lang="ts">
  useHead({
    title: 'Projects',
  })

  const projects = ref([
    {
      title: 'This site :P',
      link: 'https://ojvribeiro.me',

      stack: [
        { name: 'Vulmix', icon: 'vulmix', customIcon: true },
        { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'Sass', icon: 'logos:sass' },
      ],
    },
    {
      title: 'Laura Negócios',
      link: 'https://lauranegocios.com.br',
      stack: [
        { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
        { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'Builder.io', icon: 'logos:builder-io-icon' },
      ],
    },
    {
      title: 'Instituto Peabiru',
      link: 'https://peabiru.org.br',
      stack: [
        { name: 'Wordpress', icon: 'logos:wordpress-icon' },
        { name: 'Sass', icon: 'logos:sass' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'Webpack + Laravel Mix', icon: 'logos:webpack' },
      ],
    },
    {
      title: 'Hexcel Elevadores',
      link: 'https://hexcel.com.br',
      stack: [
        { name: 'Wordpress', icon: 'logos:wordpress-icon' },
        { name: 'Sass', icon: 'logos:sass' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'Webpack + Laravel Mix', icon: 'logos:webpack' },
      ],
    },
    {
      title: 'Quadra Engenharia',
      link: 'https://quadra.com.vc',
      stack: [
        { name: 'Laravel', icon: 'logos:laravel' },
        { name: 'Sass', icon: 'logos:sass' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'Webpack + Laravel Mix', icon: 'logos:webpack' },
      ],
    },
  ])

  function urlToUri(url: string) {
    return url.split(/https?:\/\//)[1]
  }
</script>

<template>
  <div class="bg-indigo-900">
    <Layout>
      <div class="py-32">
        <Container>
          <div class="relative py-12 text-white">
            <div class="space-y-6">
              <h1 class="font-poppins text-4xl font-bold">Projects</h1>

              <p>Here are some of the projects that I've worked on.</p>

              <div>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2" v-for="item in projects">
                    <Icon icon="bx:chevron-right" class="text-2xl" />

                    <span>
                      {{ item.title }} (<a
                        :href="item.link"
                        class="link"
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        >{{ urlToUri(item.link) }}
                        <Icon icon="lucide:external-link" class="mb-3" /></a
                      >)
                    </span>

                    <div>
                      <ul class="flex gap-2">
                        <li
                          v-for="stack in item.stack"
                          :key="stack.icon"
                          class="grid h-7 w-7 place-items-center rounded-md bg-white/90 transition-transform hover:translate-y-1"
                          :title="stack.name"
                        >
                          <span class="sr-only">{{ stack.name }}</span>
                          <Icon
                            v-if="stack.customIcon"
                            :name="stack.icon"
                            class="text-2xl"
                            :font="false"
                          />
                          <Icon v-else :icon="stack.icon" class="text-2xl" />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  </div>
</template>
