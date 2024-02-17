<script setup lang="ts">
  useHead({
    title: 'Projetos',
  })

  const editor = ref([
    'Visual Studio Code',
    'Font: Fira Code',
    'Theme: Material Syntax - Dark',
    'Icons: Material Icon Theme',
  ])

  const terminal = ref([
    'Windows Terminal',
    'Font: Cascadia Code',
    'Shell: Cmder | Git Bash | Ubuntu WSL',
    'Theme: Tango Dark | Campbell Bash | Ubuntu Dark',
  ])

  const hardware = ref([
    'Intel(R) Core(TM) i5-10400F CPU',
    'HyperX 16GB RAM',
    'NVIDIA GeForce GTX 1050 Ti OC 4G',
    'Kingston SSD 1TB NVMe M.2',
    'Logitech G502 HERO Mouse',
    'Logitech G213 Keyboard',
    'Redragon Zeus X Headset',
    'Asus H410M-E Motherboard',
  ])
</script>

<template>
  <div class="bg-slate-800">
    <Layout>
      <div class="py-32">
        <Container>
          <div class="relative py-12 text-white">
            <div class="space-y-6">
              <h2 class="font-poppins text-2xl font-bold">Editor</h2>

              <div>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2" v-for="item in editor">
                    <Icon icon="bx:chevron-right" class="text-2xl" />

                    <span>
                      {{ item }}
                    </span>
                  </li>
                </ul>
              </div>

              <h2 class="font-poppins text-2xl font-bold">Terminal</h2>

              <div>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2" v-for="item in terminal">
                    <Icon icon="bx:chevron-right" class="text-2xl" />

                    <span>
                      {{ item }}
                    </span>
                  </li>
                </ul>
              </div>

              <h2 class="font-poppins text-2xl font-bold">Hardware</h2>

              <div>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2" v-for="item in hardware">
                    <Icon icon="bx:chevron-right" class="text-2xl" />

                    <span>
                      {{ item }}
                    </span>
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
