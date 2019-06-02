import template from './h3.pug';
import './h3.scss';

export default {
  name: 'H3',
  data() {
    return {
      info: {
        title: 'H3',
      },
    };
  },
  template: template(),
};
