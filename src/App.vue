<template lang="pug">
  div(id='app')
    Header
</template>

<script>
  import Header from './components/header/header.vue';

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      Header,
    },
  }
</script>
