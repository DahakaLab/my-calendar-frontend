import template from './h1.pug';
import './h1.scss';

export default {
  name: 'H1',
  data() {
    return {
      info: {
        title: 'H1',
      },
    };
  },
  template: template(),
};
