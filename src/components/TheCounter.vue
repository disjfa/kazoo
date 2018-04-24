<template>
  <div class="py-3">
    <h3>{{ count }}</h3>
    <button
      class="btn btn-outline-primary"
      @click="decrementCount()">subtract one
    </button>
    <button
      class="btn btn-outline-primary"
      @click="incrementCount()">add one
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheCounter',
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('incrementCount');
    },
    decrementCount() {
      this.$store.dispatch('decrementCount');
    },
  },
};
</script>
