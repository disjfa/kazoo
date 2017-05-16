import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    items: [
      {
        id: '5eb76728-3a7d-11e7-a919-92ebcb67fe33',
        name: 'Mail message 1',
        read: true,
      },
      {
        id: '5eb76a84-3a7d-11e7-a919-92ebcb67fe33',
        name: 'Mail message 2',
        read: false,
      },
      {
        id: '5eb76c50-3a7d-11e7-a919-92ebcb67fe33',
        name: 'Mail message 3',
        read: false,
      },
    ],
  },
  actions,
  getters,
  mutations,
};
