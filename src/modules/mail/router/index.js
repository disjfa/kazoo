import Mail from '../views/Mail';
import Welcome from './../views/Welcome';
import Details from './../views/Details';

export default [
  {
    path: '/mail',
    name: 'mail',
    component: Mail,
    title: 'Mail',
    redirect: { name: 'mail-welcome' },
    children: [
      {
        path: 'welcome',
        name: 'mail-welcome',
        component: Welcome,
      },
      {
        path: ':id',
        name: 'mail-details',
        component: Details,
      },
    ],
  },
];
