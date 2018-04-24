export default {
  addPerson(state, person) {
    setTimeout(() => state.commit('personIsAdded', { person }), 500);
  },
  patchPerson(state, person) {
    setTimeout(() => state.commit('personIsPatched', { person }), 500);
  },
  removePerson(state, personId) {
    setTimeout(() => state.commit('personIsRemoved', { personId }), 500);
  },
};
