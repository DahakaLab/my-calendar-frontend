import template from './h4.pug';
import './h4.scss';

export default {
  name: 'fontsH4',
  data() {
    return {
      info: {
        value: '19:30',
        className: '',
      },
    };
  },
  template: template(),
};
