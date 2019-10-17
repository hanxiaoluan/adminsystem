import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import login from "../views/login/index.vue"

const routes = [{
    path: '/',
    name: 'login',
    component: login
}]
const router = new VueRouter({
    routes
})
export default router;