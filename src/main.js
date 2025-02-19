import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "boxicons";
import router from './routers/router.js'

// Vueform
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);


createApp(App)
  .use(router)
  .use(Vueform, vueformConfig)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
