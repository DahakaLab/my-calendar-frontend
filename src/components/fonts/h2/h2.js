import template from './h2.pug';
import './h2.scss';

export default {
  name: 'h2',
  data() {
    return {
      info: {
        title: 'Друзья, мои подходы пока не закончились, делюсь с вами!',
      },
    };
  },
  template: template(),
};
