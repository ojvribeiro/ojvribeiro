import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

export default definePlugin(app => {
  app.use(pinia)
  pinia.use(piniaPluginPersistedstate)
})
