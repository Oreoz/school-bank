import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  onDelete: null,
  onEdit: null,

  actions: {
    delete(coin) {
      this.get('onDelete')(coin);
    },
    edit(coin) {
      this.get('onEdit')(coin);
    }
  }
});
