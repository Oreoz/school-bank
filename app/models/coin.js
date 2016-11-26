import DS from 'ember-data';

const { belongsTo } = DS;

export default DS.Model.extend({
  coinValue: belongsTo('coin-value', { async: true, inverse: null})
});
