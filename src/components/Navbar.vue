<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded d-block">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Kazoo</a>
        <router-link :to="{name: 'home'}" class="navbar-brand">
            Awesome github
        </router-link>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mr-auto d-block">
                <li class="nav-item" v-for="route in routes">
                    <router-link :to="route" class="nav-link" active-class="active">
                        {{ route.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'navbar',
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
