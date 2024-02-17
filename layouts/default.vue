<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex flex-grow [&>*]:flex-grow">
      <slot />
    </div>

    <Footer />
  </div>
</template>
