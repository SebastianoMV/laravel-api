require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

import App from './App.vue';
import 'animate.css';


const app = new Vue({

    el: '#app',

    render:h=> h(App)


})
