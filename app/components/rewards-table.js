import Ember from 'ember';

export default Ember.Component.extend({
  students: null,
  coins: null,

  actions: {
    addCoin(coin, student) {
      this.get('onAddCoin')(coin, student);
    }
  }
});
