import template from './h5.pug';
import './h5.scss';

export default {
  name: 'fontsH5',
  data() {
    return {
      info: {
        title: 'Мы очень круто одохнули с Марусей',
      },
    };
  },
  template: template(),
};
