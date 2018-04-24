import People from '../views/People.vue';
import Welcome from './../views/Welcome.vue';
import Details from './../views/Details.vue';
import Create from './../views/Create.vue';
import Edit from './../views/Edit.vue';

export default [
  {
    path: '/people',
    name: 'people',
    component: People,
    title: 'People',
    icon: 'fa-users',
    redirect: { name: 'people-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'people-welcome',
        component: Welcome,
      },
      {
        path: 'create',
        name: 'people-create',
        component: Create,
      },
      {
        path: ':id',
        name: 'people-details',
        component: Details,
      },
      {
        path: ':id/edit',
        name: 'people-edit',
        component: Edit,
      },
    ],
  },
];
