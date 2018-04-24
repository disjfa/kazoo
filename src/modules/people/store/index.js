import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    items: [
      {
        id: '8d77b83a-c28e-430f-9177-8b443975d210',
        name: 'Charles C. Swain',
        phone: '615-233-5488',
        function: 'Director of photography',
        image: 'img/male.svg',
      },
      {
        id: '6db8bb80-25d3-48f5-bea1-5e1215e9b3b7',
        name: 'Nick M. Wright',
        phone: '423-349-9091',
        function: 'Director of fun',
        image: 'img/male.svg',
      },
      {
        id: 'e2e412b8-7c1a-46d5-8841-5fae4b4b9a9a',
        name: 'Gladys T. Garrett',
        phone: '661-469-8833',
        function: 'Manager',
        image: 'img/female.svg',
      },
    ],
  },
  actions,
  getters,
  mutations,
};
