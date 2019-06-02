import template from './header.pug';
import './header.scss';

export default {
  name: 'Header',
  data() {
    return {
      info: {
        title: 'Header',
      },
      btnEvent: {
        btnType: 'button',
        main: true,
        text: 'Событие +',
      },
      btnRefresh: {
        btnType: 'button',
        main: false,
        text: 'Обновить',
      },
    };
  },
  template: template(),
};
