<template>
  <div
    class="absolute left-1/2 top-1/2 z-[1] box-border aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-luminosity"
  >
    <div class="orbit-wrapper h-full w-full rounded-full">
      <div
        v-for="(lang, index) in langs"
        class="orbit-item"
        :class="['orbit-item-' + (index + 1)]"
        :title="lang.name"
      >
        <div class="orbit-item-content">
          <Icon :icon="lang.icon" class="!block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const langs = ref<
    {
      name: string
      icon: string
    }[]
  >([
    {
      name: 'JavaScript',
      icon: 'skill-icons:javascript',
    },
    {
      name: 'Vue',
      icon: 'vscode-icons:file-type-vue',
    },
    {
      name: 'Nuxt',
      icon: 'vscode-icons:file-type-nuxt',
    },
    {
      name: 'Sass',
      icon: 'vscode-icons:file-type-sass',
    },
    {
      name: 'WordPress',
      icon: 'bxl:wordpress',
    },
    {
      name: 'Bootstrap',
      icon: 'simple-icons:bootstrap',
    },
    {
      name: 'Tailwind',
      icon: 'vscode-icons:file-type-tailwind',
    },
    {
      name: 'React',
      icon: 'vscode-icons:file-type-reactjs',
    },
  ])
</script>

<style scoped lang="scss">
  $time: 80s;

  $translations: (
    1: (
      -300%,
      0%,
    ),
    2: (
      300%,
      0%,
    ),
    3: (
      0%,
      -300%,
    ),
    4: (
      0%,
      300%,
    ),
    5: (
      -210%,
      -210%,
    ),
    6: (
      210%,
      210%,
    ),
    7: (
      210%,
      -210%,
    ),
    8: (
      -210%,
      210%,
    ),
  );

  .orbit {
    &-wrapper {
      animation-name: orbit;
      animation-iteration-count: infinite;
      animation-duration: $time;
      animation-timing-function: linear;
      transition: 0.2s cubic-bezier(0.52, 0, 0.38, 2.12);

      &:hover {
        scale: 1.3;

        .orbit-item {
          scale: 0.7;
          opacity: 0.8;
        }
      }

      .orbit-item {
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        background-color: rgba(#fff, 0%);
        width: 40px;
        height: 40px;
        aspect-ratio: 1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: center center;
        opacity: 0.7;
        transition: 0.2s cubic-bezier(0.52, 0, 0.38, 2.12);
        scale: 0.8;

        @media (min-width: 1028px) {
          width: 70px;
          height: 70px;
          top: calc(50% - 35px);
          left: calc(50% - 35px);
        }

        @media (min-width: 1280px) {
          width: 90px;
          height: 90px;
          top: calc(50% - 45px);
          left: calc(50% - 45px);
        }

        &::after {
          content: '';
          box-shadow: 0 0 0 1px rgba(#fff, 70%);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0;
          transition: 0.2s cubic-bezier(0.52, 0, 0.38, 2.12);
        }

        .orbit-item-content {
          rotate: 0deg;
          animation-name: orbit-compensation;
          animation-iteration-count: infinite;
          animation-duration: $time;
          animation-timing-function: linear;
          font-size: 2.6rem;
          color: #fff;
        }

        &:hover {
          opacity: 1;
          box-shadow: 0 0 0 5px rgba(#fff, 30%);

          &::after {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      }
    }
  }

  @each $i, $translation in $translations {
    .orbit-item:nth-child(#{$i}) {
      $translation: map-get($translations, $i);
      transform: translate($translation...);
    }
  }

  @keyframes orbit {
    0% {
      rotate: 0deg;
    }

    100% {
      rotate: 360deg;
    }
  }

  @keyframes orbit-compensation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }
</style>
