<template>
  <div class="admin">
    <div class="admin-sidebar bg-light">
      <the-navbar/>
    </div>
    <div
      class="admin-body"
      role="main">
      <div class="container-fluid">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  name: 'App',
  components: { TheNavbar },
};
</script>

<style lang="scss">
    $enable-rounded: false;
    $fa-font-path: "~font-awesome/fonts";
    $kazoo-grid-breakpoint: 992px;

    @import '~bootstrap/scss/bootstrap';
    @import '~font-awesome/scss/font-awesome';
    @import '~vue-route-timeline/src/style/vue-route-timeline';
    @import './scss/tabbar';
    @import './scss/admin';
</style>
