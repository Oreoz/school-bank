import Ember from 'ember';

export default Ember.Controller.extend({
  value: null,

  actions: {
    createStudent() {
      let coinValue = this.store.createRecord('coin-value', {
        value: this.get('value')
      });

      coinValue.save().then(() => {
        this.set('value', null);
      });
    },
    deleteCoin(coinValue) {
      coinValue.destroyRecord();
    },
    editCoin(coinValue) {
      this.transitionToRoute('coin', coinValue.get('id'));
    }
  }
});
