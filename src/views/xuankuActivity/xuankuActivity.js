// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './xuankuActivity.vue'
import '@/assets/css/index.scss'
import loading from '@/components/utils/loading/directive'

Vue.use(loading)

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

// import { MessageBox } from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(MessageBox.name, MessageBox)

// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
