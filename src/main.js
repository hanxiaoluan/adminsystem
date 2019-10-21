import Vue from "vue";
import App from "./App.vue";
import Cookies from "js-cookie";
import ElementUI from "element-ui";
import router from "./router";
import "@/icons";

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: Cookies.get('size') | 'medium'
  // size:'small'
  // set element-ui default size
});


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");