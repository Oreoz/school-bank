import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCoin(coin, student) {
      student.get('coins').pushObject(coin);
      student.save();
    },
  }
});
