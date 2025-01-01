import { defineStore } from 'pinia'

export const useFireworksStore = defineStore(
  'fireworks',
  () => {
    const enabled = ref<boolean>(true)

    function toggle() {
      enabled.value = !enabled.value
    }

    return {
      enabled,
      toggle,
    }
  },
  {
    persist: {
      storage: localStorage,
    },
  }
)
