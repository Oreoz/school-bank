import DS from 'ember-data';
import Ember from 'ember';

const { belongsTo } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  coinValue: belongsTo('coin-value', { async: true, inverse: null }),

  value: computed('coinValue.value', function() {
    return this.get('coinValue.value');
  })
});
