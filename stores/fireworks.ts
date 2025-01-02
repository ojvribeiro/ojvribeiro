import { defineStore } from 'pinia'
import { useIntervalFn } from '@vueuse/core'

export const useFireworksStore = defineStore(
  'fireworks',
  () => {


    const isNewYearRef = ref<boolean>(false)
    const enabled = ref<boolean>(true)

    const {} = useIntervalFn(() => {
      const now = new Date()
      isNewYearRef.value = now.getMonth() === 0 && now.getDate() === 1
    })

    const isNewYear = computed(() => {
      return isNewYearRef.value
    })

    function toggle() {
      enabled.value = !enabled.value
    }

    return {
      enabled,
      toggle,
      isNewYear,
    }
  },
  {
    persist: {
      storage: localStorage,
    },
  }
)
