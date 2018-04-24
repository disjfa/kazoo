export default {
  // initialize(state) {
  //   console.log(state);
  // },
  readItem(state, item) {
    setTimeout(() => state.commit('itemIsRead', { item }), 500);
  },
};
