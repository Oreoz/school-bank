import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  coins: null,
  onAddCoin: null,

  student: computed.alias('row.content'),

  actions: {
    add(coin) {
      let student = this.get('student');
      this.get('onAddCoin')(coin, student);
    }
  }
});
