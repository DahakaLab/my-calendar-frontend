import Vue from 'vue'
import App from './App.vue'

require('./autoload.scss');

const rootVueEl = document.querySelector('.root');
if (rootVueEl) {
  new Vue({
    el: rootVueEl,
    render: h => h(App)
  });
}
