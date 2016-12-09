import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('coin-value', params.coin_id);
  },
  actions: {
    save(coin) {
      coin.save().then(() => {
        this.transitionTo('coins');
      });
    }
  }
});
