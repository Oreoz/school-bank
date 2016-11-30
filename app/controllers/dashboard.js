import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCoin(coinValue, student) {
      let newCoin = this.store.createRecord('coin', { value: coinValue });

      student.get('coins').addObject(newCoin);

      newCoin.save().then(() => {
        student.save();
      });
    }
  }
});
