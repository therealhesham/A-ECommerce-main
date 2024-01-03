/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Components
import App from './App.vue'
//pinia

//router
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Toast from "vue-toastification";

const app = createApp(App)

registerPlugins(app)

app
    .use(Toast)
    .mount('#app')