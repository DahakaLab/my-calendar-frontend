import template from './paragraph .pug';
import './paragraph .scss';

export default {
  name: 'PARAGRAPH ',
  data() {
    return {
      info: {
        title: 'PARAGRAPH',
      },
    };
  },
  template: template(),
};
