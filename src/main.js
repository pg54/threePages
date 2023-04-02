import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import App from "./App.vue";
import router from "./router";
import axios from "./utils/axios";

import VueNotifications from "vue-notifications";
import miniToastr from "mini-toastr"; // https://github.com/se-panfilov/mini-toastr

miniToastr.init();

function toast({ title, message, type, timeout, cb }) {
  return miniToastr[type](message, title, timeout, cb);
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast,
};

Vue.use(VueNotifications, options);

Vue.use(VueAwesomeSwiper);

Vue.prototype.$axios = axios;

import "./assets/main.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
