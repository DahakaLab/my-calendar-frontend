import template from './h5.pug';
import './h5.scss';

export default {
  name: 'fontsH5',
  data() {
    return {
      info: {
        value: 'Мы очень круто одохнули с Марусей',
        className: '',
      },
    };
  },
  template: template(),
};
