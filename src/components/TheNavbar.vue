<template>
  <nav class="tabbar tabbar-toggleable-md">
    <router-link
      :to="{name: 'dashboard'}"
      class="tabbar-brand">
      Kazoo
    </router-link>

    <ul class="tabbar-nav bg-light">
      <li

        v-for="route in routes"
        :key="route.name"
        class="tabbar-item">
        <router-link
          :to="route"
          class="tabbar-link text-dark"
          active-class="active">
          <i

            :class="route.icon"
            class="fa tabbar-icon"/>
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    routes() {
      const routes = [];
      Object.keys(this.$router.options.routes).forEach((key) => {
        const route = this.$router.options.routes[key];
        if (route.title) {
          routes.push(route);
        }
      });
      return routes;
    },
  },
};
</script>
