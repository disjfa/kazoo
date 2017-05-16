<template>
    <div>
        <h1>{{item.name}}</h1>
    </div>
</template>

<script>
    export default {
      name: 'mail-details',
      computed: {
        item() {
          return this.$store.getters['mail/getItem'](this.$route.params);
        },
      },
    };
</script>
