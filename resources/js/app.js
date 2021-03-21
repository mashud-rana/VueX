
require('./bootstrap');

window.Vue = require('vue').default;
import store from './store/index.js'


Vue.component('my-todo', require('./components/todo.vue').default);
Vue.component('add-todo', require('./components/addTodo.vue').default);


const app = new Vue({
    el: '#app',
    store
});
