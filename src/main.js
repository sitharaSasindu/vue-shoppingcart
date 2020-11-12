import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart, faDollarSign);

// setting up routing for application
import Products from "./components/Products";
import Checkout from "./components/Checkout";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
