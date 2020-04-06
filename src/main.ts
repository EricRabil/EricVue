import Vue from 'vue'
import App from './App.vue'
import DiscordStatus from './DiscordStatus.vue'

Vue.config.productionTip = false

Vue.component('discord-status', DiscordStatus)

new Vue({
  render: h => h(App)
}).$mount('#app')
