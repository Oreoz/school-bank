import Ember from 'ember';

export default Ember.Controller.extend({
  value: null,

  actions: {
    createStudent() {
      let coin = this.store.createRecord('coin', {
        value: this.get('value')
      });

      coin.save().then(() => {
        this.set('value', null);
      });
    },
    deleteCoin(coin) {
      coin.destroyRecord();
    },
    editCoin(coin) {
      this.transitionToRoute('coin', coin.get('id'));
    }
  }
});
