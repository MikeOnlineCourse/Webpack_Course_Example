import '@babel/polyfill';
import 'es6-promise';
import 'es6-object-assign';
import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store';
import route from './route';
Vue.use(VueRouter);
const router = new VueRouter(route);
import App from 'App';
import './scss/global/global.scss';
new Vue({
    el: '#app',
    router,
    store,
    render: h=>h(App),
});