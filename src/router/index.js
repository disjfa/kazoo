import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/views/Dashboard';
import mailRoutes from '../modules/mail/router';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '*',
    redirect: { name: 'dashboard' },
  },
];

const routes = baseRoutes.concat(mailRoutes);
export default new Router({
  routes,
});
