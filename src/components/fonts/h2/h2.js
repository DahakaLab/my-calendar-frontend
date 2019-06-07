import template from './h2.pug';
import './h2.scss';

export default {
  name: 'fontsH2',
  data() {
    return {
      info: {
        value: 'Друзья, мои подходы пока не закончились, делюсь с вами!',
        className: '',
      },
    };
  },
  template: template(),
};
