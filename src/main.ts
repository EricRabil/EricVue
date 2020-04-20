import Vue from 'vue'
import Toasted from 'vue-toasted'
import App from './App.vue'
import DiscordStatus from './DiscordStatus.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faInstagram, faReddit, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'
import VueClipboard from 'vue-clipboard2'

library.add(faGithub, faTwitter, faInstagram, faReddit, faDiscord, faPlay, faPause)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VTooltip)
Vue.use(Toasted)
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.config.productionTip = false

Vue.component('discord-status', DiscordStatus)

new Vue({
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
