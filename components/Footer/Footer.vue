<template>
  <footer class="bg-black/10">
    <Container>
      <div class="flex items-center justify-between py-8">
        <div>
          <img
            src="@/assets/img/victor-ribeiro-logo-white.svg"
            alt="Logo"
            class="h-6"
          />
        </div>

        <div>
          <p class="text-white">
            Made with
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="nofollow noreferrer noopener"
              class="border-b border-white/10 transition-colors hover:border-white"
              >Vue</a
            ><Icon icon="bx:bxl-vuejs" class="text-2xl" /> +
            <a
              href="https://vulmix.dev"
              target="_blank"
              rel="nofollow noreferrer noopener"
              class="border-b border-white/10 transition-colors hover:border-white"
              >Vulmix</a
            >
            <Icon name="vulmix" class="text-2xl ml-[2px]" />
          </p>
        </div>
      </div>
    </Container>
  </footer>
</template>
