import Messages from '../views/Messages.vue';
import Welcome from './../views/Welcome.vue';
import Details from './../views/Details.vue';

export default [
  {
    path: '/messages',
    name: 'messages',
    component: Messages,
    title: 'Messages',
    icon: 'fa-comments',
    redirect: { name: 'messages-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'messages-welcome',
        component: Welcome,
      },
      {
        path: ':id',
        name: 'messages-details',
        component: Details,
      },
    ],
  },
];
