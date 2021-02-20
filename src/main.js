import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./store/axios";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.min";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
