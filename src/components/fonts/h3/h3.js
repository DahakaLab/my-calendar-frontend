import template from './h3.pug';
import './h3.scss';

export default {
  name: 'h3',
  data() {
    return {
      info: {
        title: '19 июня',
      },
    };
  },
  template: template(),
};
