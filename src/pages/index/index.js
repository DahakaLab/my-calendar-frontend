import template from './index.pug';
import Header from '../../components/header/header';
import fontsH1 from '../../components/fonts/h1/h1';
import fontsH2 from '../../components/fonts/h2/h2';
import fontsH3 from '../../components/fonts/h3/h3';
import fontsH4 from '../../components/fonts/h4/h4';
import fontsH5 from '../../components/fonts/h5/h5';
import fontsH6 from '../../components/fonts/h6/h6';
import fontsP from '../../components/fonts/p/p';

export default {
  name: 'Index',
  template: template(),
  data() {
    return {};
  },
  components: {
    Header,
    fontsH1,
    fontsH2,
    fontsH3,
    fontsH4,
    fontsH5,
    fontsH6,
    fontsP,
  },
};
