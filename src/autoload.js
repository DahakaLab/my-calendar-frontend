import Vue from 'vue';
import Index from './pages/index/index';

const rootVueEl = document.querySelector('.root');
if (rootVueEl) {
  new Vue({
    el: rootVueEl,
    render: h => h(Index),
  });
}
