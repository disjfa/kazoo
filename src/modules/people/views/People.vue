<template>
  <div class="row">
    <div class="col-md-4 col-xl-3 bg-dark vh-100">
      <div class="py-3">
        <router-link
          :to="{name: 'people-create'}"
          class="btn btn-outline-primary btn-block">Add person</router-link>
      </div>
      <router-link
        v-for="item in items"
        :to="{name: 'people-details', params: { id: item.id }}"
        :key="item.id"
        class="row py-2">
        <div class="col-3 col-md-4">
          <img
            :src="item.image"
            alt=""
            class="img-fluid rounded-circle bg-faded img-thumbnail">
        </div>
        <div class="col-9 col-md-8 text-white">
          {{ item.name }}
          <div class="text-muted">
            {{ item.function }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-md-8 col-xl-9 vh-100">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'People',
  computed: {
    items() {
      return this.$store.getters['people/getItems'];
    },
  },
};
</script>
