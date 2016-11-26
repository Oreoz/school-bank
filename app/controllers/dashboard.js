import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCoin(coinValue, student) {
      let coin = this.store.createRecord('coin', { coinValue: coinValue });
      student.get('coins').pushObject(coin);
      coin.save().then(() => { student.save() });
    }
  }
});
