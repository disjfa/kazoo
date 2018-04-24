<template>
  <div class="py-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{name: 'people'}">
          People
        </router-link>
      </li>
      <li class="breadcrumb-item active">
        Add person
      </li>
    </ol>
    <form @submit.prevent="addPerson()">
      <div class="form-group">
        <label for="person-name">Name</label>
        <input
          id="person-name"
          v-model="person.name"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="person-phone">Phone</label>
        <input
          id="person-phone"
          v-model="person.phone"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="person-function">Function</label>
        <input
          id="person-function"
          v-model="person.function"
          type="text"
          class="form-control">
      </div>
      <button
        type="submit"
        class="btn btn-primary">
        Add person
      </button>
    </form>
  </div>
</template>

<script>
const uuidv4 = require('uuid/v4');

export default {
  name: 'PeopleCreate',
  data() {
    return {
      person: {
        id: uuidv4(),
        name: '',
        phone: '',
        function: '',
        image: 'img/male.svg',
      },
    };
  },
  mounted() {
  },
  methods: {
    addPerson() {
      this.$store.dispatch('people/addPerson', this.person);
      this.person = {
        id: uuidv4(),
        name: '',
        phone: '',
        function: '',
        image: 'img/male.svg',
      };
    },
  },
};
</script>
