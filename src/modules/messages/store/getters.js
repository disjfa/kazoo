export default {
  getItems: state => state.items,
  getItem: state => payload => state.items.find(item => item.id === payload.id),
};
