// Axios & Echo global
require("./bootstrap");

/* Core */
import Vue from "vue";
import Buefy from "buefy";

import moment from 'moment';
import mixins from './helper/mixin';


/* Router & Store */
import router from "./router";
import store from "./store";

/* Vue. Main component */
import App from "./App.vue";
import JsonExcel from "vue-json-excel";

/* Vue. Component in recursion */
import AsideMenuList from "@/components/AsideMenuList";

/* Collapse mobile aside menu on route change */
router.afterEach(() => {
  store.commit("asideMobileStateToggle", false);
});

Vue.config.productionTip = false;

/* These components are used in recursion algorithm */
Vue.component("AsideMenuList", AsideMenuList);
 
Vue.component("downloadExcel", JsonExcel);

/* Main component */
Vue.component("App", App);

/* Buefy */
Vue.use(Buefy);

Vue.filter('format_bday', function (date) {
  return moment(date).startOf('hours').fromNow();
});

Vue.filter('relativeTime', function (date) {

  return moment(date).startOf('hours').fromNow();

});

Vue.filter('isEmpty', function (value) {
  return (value === "" || value === null) ? "N/A" : value;
});


/* This is main entry point */

new Vue({
  store,
  created() {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    console.log(user)
    if (user) {
      this.$store.commit('auth/SET_USER', user)
    }
  },
  router,
  render: h => h(App),
  mounted() {
    document.documentElement.classList.remove("has-spinner-active");
  },
}).$mount("#app");
