import template from './h4.pug';
import './h4.scss';

export default {
  name: 'h4',
  data() {
    return {
      info: {
        title: '19:30',
      },
    };
  },
  template: template(),
};
