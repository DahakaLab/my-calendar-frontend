import template from './index.pug';
import Header from '../../components/header/header';
import H1 from '../../components/fonts/h1/h1';
import H2 from '../../components/fonts/h2/h2';
import H3 from '../../components/fonts/h3/h3';
import H4 from '../../components/fonts/h4/h4';
import H5 from '../../components/fonts/h5/h5';
import H6 from '../../components/fonts/h6/h6';
import P from '../../components/fonts/p/p';

export default {
  name: 'Index',
  template: template(),
  data() {
    return {};
  },
  components: {
    Header,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
  },
};
