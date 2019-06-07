import template from './h1.pug';
import './h1.scss';

export default {
  name: 'fontsH1',
  data() {
    return {
      info: {
        value: 'Мой календарь',
        className: '',
      },
    };
  },
  template: template(),
};
