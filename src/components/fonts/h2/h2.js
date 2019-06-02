import template from './h2.pug';
import './h2.scss';

export default {
  name: 'H2',
  data() {
    return {
      info: {
        title: 'H2',
      },
    };
  },
  template: template(),
};
