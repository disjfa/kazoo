export default {
  getItems: state => state.items,
  getItem: state => payload => Object.assign({}, state.items.find(item => item.id === payload.id)),
};
