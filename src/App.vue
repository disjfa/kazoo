<template>
    <div class="admin">
        <div class="admin-sidebar bg-faded">
            <navbar></navbar>
        </div>
        <div class="admin-body" role="main">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    components: { Navbar },
    name: 'app',
  };
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';

    @media screen and (min-width: 992px) {
        .admin {
            height: 100vh;
            display: flex;
        }

        .admin .admin-sidebar {
            width: 300px;
            overflow: auto;
        }

        .admin .admin-body {
            flex: 1;
            overflow: auto;
        }
    }
</style>
