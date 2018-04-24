import Vue from 'vue';

export default {
  personIsAdded(state, payload) {
    state.items.push(payload.person);
  },
  personIsPatched(state, payload) {
    const { person } = payload;
    const items = state.items.map(item => (item.id === person.id ? person : item));
    Vue.set(state, 'items', items);
  },
  personIsRemoved(state, payload) {
    const items = state.items.filter(item => item.id !== payload.personId);
    Vue.set(state, 'items', items);
  },
};
