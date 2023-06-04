<template>
  <div class="orbit">
    <div class="orbit-wrapper">
      <div class="orbit-item" :title="lang.name" v-for="lang in langs">
        <div class="orbit-item-content">
          <Icon :icon="lang.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const langs = ref([
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
  $time: 40s;

  .orbit {
    position: absolute;
    width: 220%;
    aspect-ratio: 1;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    //scale: 0.9;
    box-sizing: border-box;
    z-index: 1;

    &-wrapper {
      width: 100%;
      height: 100%;
      animation-name: orbit;
      animation-iteration-count: infinite;
      animation-duration: $time;
      animation-timing-function: linear;
      border-radius: 50%;

      &:hover {
        .orbit-item {
          scale: 1.2;
          background-color: rgba(#fff, 10%);
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
        opacity: 0.6;
        transition: 0.2s cubic-bezier(0.52, 0, 0.38, 2.12);

        @media (min-width: 1028px) {
          width: 70px;
          height: 70px;
          top: calc(50% - 35px);
          left: calc(50% - 35px);
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

        &-content {
          transform: rotate(0deg);
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

        &:nth-child(1) {
          transform: translate(-300%, 0%);
        }

        &:nth-child(2) {
          transform: translate(300%, 0%);
        }

        &:nth-child(4) {
          transform: translate(0%, 300%);
        }

        &:nth-child(3) {
          transform: translate(0%, -300%);
        }

        &:nth-child(5) {
          transform: translate(-210%, -210%);
        }

        &:nth-child(6) {
          transform: translate(210%, 210%);
        }

        &:nth-child(7) {
          transform: translate(210%, -210%);
        }

        &:nth-child(8) {
          transform: translate(-210%, 210%);
        }
      }
    }
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
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
