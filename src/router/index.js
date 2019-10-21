import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const constantRoutes = [{
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login'], resolve)
}]
const router = new VueRouter({
    routes: constantRoutes
})
export default router;