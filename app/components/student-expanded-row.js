import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  coins: null,
  onAddCoin: null,

  actions: {
    add(coin) {
      let student = this.get('row.content');
      this.get('onAddCoin')(coin, student);
    }
  }
});
