import Ember from 'ember';
import Table from 'ember-light-table';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  sort: 'firstName',

  students: null,
  coins: null,
  table: null,

  columns: computed(function() {
    return [{
      width: '40px',
      sortable: false,
      cellComponent: 'row-toggle'
    },{
      label: 'First Name',
      valuePath: 'firstName',
      sortable: false,
      width: '100px'
    },{
      label: 'Last Name',
      valuePath: 'lastName',
      sortable: false,
      width: '100px'
    },{
      label: 'Total Coins',
      valuePath: 'totalCoins',
      sortable: false
    }];
  }),

  init() {
    this._super(...arguments);

    let table = new Table(this.get('columns'), this.get('students'), { enableSync: true });
    this.set('table', table);
  },

  actions: {
    onAddCoin(coin, student) {
      this.get('onAddCoin')(coin, student);
    }
  }
});
