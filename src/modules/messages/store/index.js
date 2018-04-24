import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    items: [
      {
        id: '5eb76728-3a7d-11e7-a919-92ebcb67fe33',
        name: 'In in justo in ipsum lobortis',
        content: '<p>Morbi pulvinar sem in enim dignissim, vel ornare ligula sagittis. In in justo in ipsum lobortis consequat et non tortor. Proin et tempus ex. Proin consectetur eros a sapien tempor consequat. Cras rhoncus massa nec nulla hendrerit, vel hendrerit dui hendrerit. Maecenas gravida euismod velit eget dictum. Proin imperdiet dictum erat at dapibus. Sed nec metus tortor. Maecenas egestas ut risus id rutrum. Aenean non ipsum mauris. Proin volutpat risus eget enim auctor commodo. Morbi hendrerit convallis ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus accumsan magna sit amet arcu porta, id pretium mauris varius. Integer nisi enim, blandit nec fermentum at, pharetra mollis lorem.</p>',
        read: true,
      },
      {
        id: '5eb76a84-3a7d-11e7-a919-92ebcb67fe33',
        name: 'Phasellus et quam sagittis',
        content: '<p>Quisque condimentum est ut orci sodales, vitae gravida urna efficitur. Phasellus et quam sagittis, consequat velit nec, consectetur tortor. Suspendisse id faucibus diam. Phasellus eget aliquet augue. Proin ultricies faucibus metus eget scelerisque. Praesent eu lacus mauris. Maecenas vitae enim sem. Nam sit amet convallis eros. Sed congue id ex nec eleifend. Nulla porta libero at massa posuere pellentesque. Aenean tincidunt turpis nibh, sed dictum risus blandit in. Vestibulum congue finibus odio, ac auctor erat dapibus at. Fusce molestie purus vel mi venenatis, ut mollis dui dapibus. Donec ultricies tincidunt quam, at auctor metus ultrices ac.</p>',
        read: false,
      },
      {
        id: '5eb76c50-3a7d-11e7-a919-92ebcb67fe33',
        name: 'Praesent in porttitor lorem',
        content: '<p>Aliquam mattis semper mauris vitae placerat. Curabitur interdum quam id mi mattis efficitur. Etiam at arcu tortor. Praesent in porttitor lorem, tempor hendrerit nulla. Donec dapibus blandit velit vel vehicula. Nulla sit amet pretium turpis, id consectetur diam. Curabitur lacinia tincidunt est a sodales. Suspendisse faucibus quam vitae venenatis eleifend. Mauris blandit, nunc eu sodales scelerisque, elit erat porttitor ligula, in volutpat massa libero quis felis. Suspendisse volutpat tellus eu ullamcorper feugiat. </p>',
        read: false,
      },
    ],
  },
  actions,
  getters,
  mutations,
};
