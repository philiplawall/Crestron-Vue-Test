import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';


window['bridgeReceiveIntegerFromNative'] = CrComLib.bridgeReceiveIntegerFromNative;
window['bridgeReceiveBooleanFromNative'] = CrComLib.bridgeReceiveBooleanFromNative;
window['bridgeReceiveStringFromNative'] = CrComLib.bridgeReceiveStringFromNative;
window['bridgeReceiveObjectFromNative'] = CrComLib.bridgeReceiveObjectFromNative;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
