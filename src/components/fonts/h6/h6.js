import template from './h6.pug';
import './h6.scss';

export default {
  name: 'fontsH6 ',
  data() {
    return {
      info: {
        value: 'Румыния, Район берегов Лос-Сантес',
        className: '',
      },
    };
  },
  template: template(),
};
