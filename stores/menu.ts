import { defineStore } from 'pinia'

export const useMenu = defineStore('menu', {
  state() {
    return {
      drawer: {
        isOpen: false,
      },
    }
  },
})
