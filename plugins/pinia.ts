import { createPinia } from 'pinia'

const pinia = createPinia()

export default definePlugin(app => {
  app.use(pinia)
})
