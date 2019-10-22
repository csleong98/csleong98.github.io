import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import Vue from 'vue'
import App from './App.vue'

Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
