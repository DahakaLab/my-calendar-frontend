import template from './p.pug';
import './p.scss';

export default {
  name: 'fontsP',
  data() {
    return {
      info: {
        value: 'Моя мама очень трудолюбивая и успешная женщина. Однажды она призналась мне, что считает лень — болезнью. Поэтому, когда человек ленится, его надо оставить в пок... \tзаварить чай с малиной. Сейчас она',
        className: '',
      },
    };
  },
  template: template(),
};
