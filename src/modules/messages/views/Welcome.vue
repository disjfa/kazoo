<template>
  <div class="py-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{name: 'messages'}">
          mail
        </router-link>
      </li>
      <li class="breadcrumb-item active">
        Welcome
      </li>
    </ol>
    <h1>Welcome</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda dolor
      eligendi enim eos, impedit in ipsum laboriosam maxime mollitia natus necessitatibus neque,
      odit quia, quibusdam sed soluta totam.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MessagesWelcome',
  mounted() {
    this.$routeTimeline.set('Messages', 'All the messages');
  },
};
</script>
