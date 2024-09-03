import { createPinia } from 'pinia'

const pinia = createPinia()

export default defineVulmixPlugin(app => {
  app.use(pinia)
})
