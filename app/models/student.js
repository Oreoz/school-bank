import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),

  coins: hasMany('coin', { async: true, inverse: null }),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  totalCoins: computed('coins.[]', function() {
    return this.get('coins.length');
  })
});
