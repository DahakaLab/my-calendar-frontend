import template from './h3.pug';
import './h3.scss';

export default {
  name: 'fontsH3',
  data() {
    return {
      info: {
        value: '19 июня',
        className: '',
      },
    };
  },
  template: template(),
};
