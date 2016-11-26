import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('coins-list', 'Integration | Component | coins list', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{coins-list}}`);

  assert.equal(this.$('h3').text().trim(), 'Coin List');
  assert.equal(this.$('p').text().trim(), 'You don\'t have any coins yet, consider adding some!');
});
