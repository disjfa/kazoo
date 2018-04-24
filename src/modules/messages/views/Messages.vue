<template>
  <div class="row">
    <div class="col-md-4 col-xl-3 bg-info vh-100">
      <div
        v-for="item in items"
        :key="item.id"
        class="py-1">
        <router-link
          :to="{name: 'messages-details', params: { id: item.id }}"
          :class="{'font-weight-bold': !item.read}"
          class="d-block text-white">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="col-md-8 col-xl-9 vh-100">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  computed: {
    items() {
      return this.$store.getters['messages/getItems'];
    },
  },
};
</script>
