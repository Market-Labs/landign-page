import './assets/styles/reset.css'
import './assets/styles/variables.css'
import './assets/styles/layout.css'
import './assets/styles/main.css'
import './assets/styles/components/header.css'
import './assets/styles/components/home.css'
import './assets/styles/components/information.css'
import './assets/styles/components/videos.css'
import './assets/styles/components/pricing.css'
import './assets/styles/components/contact.css'
import './assets/styles/components/footer.css'
import './assets/styles/responsive.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

createApp(App).use(i18n).mount('#app')
