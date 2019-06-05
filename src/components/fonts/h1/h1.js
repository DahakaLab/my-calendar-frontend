import template from './h1.pug';
import './h1.scss';

export default {
  name: 'h1',
  data() {
    return {
      info: {
        title: 'Мой календарь',
      },
    };
  },
  template: template(),
};
