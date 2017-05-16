<template>
    <div class="row">
        <div class="col-md-4">
            <div class="list-group py-3">
                <router-link :to="{name: 'mail-details', params: { id: item.id}}" class="list-group-item" v-for="item in items" key="item.id">
                    {{item.name}}
                </router-link>
            </div>
        </div>
        <div class="col-md-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'mail',
    computed: {
      items() {
        return this.$store.getters['mail/getItems'];
      },
    },
  };
</script>
