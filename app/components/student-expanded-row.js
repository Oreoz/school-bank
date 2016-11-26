import Ember from 'ember';

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
